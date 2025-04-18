import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Footer = ({ toggleDarkMode }) => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full py-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Pranay-chary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pranay-indrakanti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/PranayIndr27792"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              aria-label="X (Twitter) Profile"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/pranay_pranay41/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-blue-500 hover:bg-opacity-10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <MdDarkMode className="text-2xl dark:hidden" />
              <MdLightMode className="text-2xl hidden dark:block" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Pranay Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
