import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                DJ
              </div>
              <div>
                <h3 className="font-bold text-xl">{personalInfo.name}</h3>
                <p className="text-slate-400 text-sm">Full Stack Developer & Business Analyst</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              Building data-driven solutions that bridge technology and business impact. 
              Open to opportunities in software development, data science, and business analysis.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Mail size={16} className="mr-3 flex-shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Phone size={16} className="mr-3 flex-shrink-0" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin size={16} className="mr-3 mt-0.5 flex-shrink-0" />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center">
              Built with <Heart size={14} className="mx-1 text-red-500" /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
