import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
              DJ
            </div>
            <span className={`font-semibold text-lg hidden sm:block transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-slate-800'
            }`}>
              Donald Fotso
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 btn-transition">
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center space-x-3 px-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
