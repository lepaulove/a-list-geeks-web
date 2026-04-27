"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContactForm = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const logger = __importStar(require("firebase-functions/logger"));
const params_1 = require("firebase-functions/params");
const recaptchaSecret = (0, params_1.defineSecret)("RECAPTCHA_SECRET_KEY");
// Initialize the Firebase Admin SDK to interact with Firestore securely
admin.initializeApp();
exports.submitContactForm = (0, https_1.onRequest)({
    cors: true, // Automatically handles CORS for your frontend
    secrets: [recaptchaSecret],
    maxInstances: 10
}, async (req, res) => {
    // 1. Ensure it's a POST request
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
    }
    const { name, email, phone, message, captchaToken } = req.body;
    // 2. Validate presence of required fields
    if (!captchaToken || !name || !email || !message) {
        res.status(400).json({ error: 'Missing required fields or CAPTCHA token' });
        return;
    }
    try {
        // 3. Verify the CAPTCHA token with Google
        // You will need to store this secret key in Firebase environment variables
        const secretKey = recaptchaSecret.value();
        ;
        if (!secretKey) {
            logger.error("Missing RECAPTCHA_SECRET_KEY environment variable");
            res.status(500).json({ error: 'Server configuration error' });
            return;
        }
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
        // Native fetch is available in Node.js 18+
        const captchaResponse = await fetch(verifyUrl, { method: 'POST' });
        const captchaData = await captchaResponse.json();
        if (!captchaData.success) {
            logger.warn("reCAPTCHA verification failed", captchaData);
            res.status(403).json({ error: 'Failed CAPTCHA verification. Are you a bot?' });
            return;
        }
        // 4. Write data to Firestore securely using the Admin SDK
        const db = admin.firestore();
        await db.collection('contact_submissions').add({
            name,
            email,
            phone: phone || '',
            message,
            status: 'new',
            createdAt: admin.firestore.FieldValue.serverTimestamp() // Secure server-side timestamp
        });
        logger.info(`New contact submission from ${email}`);
        res.status(200).json({ success: true, message: 'Message sent successfully' });
    }
    catch (error) {
        logger.error("Error processing submission:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//# sourceMappingURL=index.js.map