import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import { defineSecret } from "firebase-functions/params";

const recaptchaSecret = defineSecret("RECAPTCHA_SECRET_KEY");

// Initialize the Firebase Admin SDK to interact with Firestore securely
admin.initializeApp();

export const submitContactForm = onRequest(
  { 
    cors: true, // Automatically handles CORS for your frontend
    secrets: [recaptchaSecret],
    maxInstances: 10 
  }, 
  async (req, res) => {
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
      const secretKey = recaptchaSecret.value();;
      
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

    } catch (error) {
      logger.error("Error processing submission:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);