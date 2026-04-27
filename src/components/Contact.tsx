import { useState, FormEvent, useRef } from 'react';
import { Mail, Phone, Globe, Send, CheckCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'captcha_required'>('idle');
  
  // State for the CAPTCHA token
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Prevent submission if CAPTCHA isn't checked
    if (!captchaToken) {
      setSubmitStatus('captcha_required');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send the form data AND the captchaToken to your secure backend
      // Make sure to replace this URL with your actual Firebase Cloud Function URL
      const response = await fetch('YOUR_FIREBASE_CLOUD_FUNCTION_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset the CAPTCHA widget after successful submission
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token && submitStatus === 'captcha_required') {
      setSubmitStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to level up your tech? Let's discuss your project and make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <a
                href="mailto:contact@alistgeeks.com"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white group-hover:text-cyan-400 transition-colors">
                    contact@alistgeeks.com
                  </div>
                </div>
              </a>

              <a
                href="tel:601-291-5920"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white group-hover:text-cyan-400 transition-colors">601-291-5920</div>
                </div>
              </a>

              <a
                href="https://thealistgeeks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Website</div>
                  <div className="text-white group-hover:text-cyan-400 transition-colors">
                    thealistgeeks.com
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                {[
                  'FREE initial tech consultation',
                  'Expert software engineering team',
                  'Transparent pricing and timelines',
                  '24/7 support and maintenance',
                  'Cutting-edge technology stack',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* The ReCAPTCHA widget */}
              <div className="flex flex-col items-start gap-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>

              {submitStatus === 'captcha_required' && (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg text-yellow-400">
                  Please verify that you are not a robot.
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !captchaToken}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}