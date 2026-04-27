import { Mail, Phone, Globe, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Website Development',
    'Web App Development',
    'Mobile App Development',
    'Tech Consulting',
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                THE A-LIST GEEKS
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your A-List Team for Apps & Ideas. Transforming innovative concepts into powerful digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@alistgeeks.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@alistgeeks.com
              </a>
              <a
                href="tel:601-291-5920"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                601-291-5920
              </a>
              <a
                href="https://thealistgeeks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                thealistgeeks.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} The A-List Geeks. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"></div>
    </footer>
  );
}
