import React, { useState } from 'react';
import { 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">Sonu Communication</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting businesses through innovative communication solutions. 
              Your trusted partner for all communication needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+18337087900" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Network Solutions
                </a>
              </li>
              <li>
                <a href="tel:+18337087900" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Security Systems
                </a>
              </li>
              <li>
                <a href="tel:+18337087900" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="tel:+18337087900" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  Mobile Solutions
                </a>
              </li>
              <li>
                <a href="tel:+18337087900" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  System Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-teal-400" />
              <a href="tel:+18337087900" className="text-gray-400 hover:text-teal-400 transition-colors">+1 (833) 708-7900</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sonu Communication. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;