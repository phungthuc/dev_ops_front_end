import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: FiMail, href: `mailto:${personalInfo.socialLinks.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="text-white font-semibold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Games
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 