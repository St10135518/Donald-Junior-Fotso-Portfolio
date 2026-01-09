import React from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mockData';

const HeroSection = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 animate-fade-in-up">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Donald
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 mb-6 animate-fade-in-up stagger-1">
              {personalInfo.title}
            </h2>

            {/* Tagline */}
            <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up stagger-2">
              {personalInfo.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start text-slate-500 mb-8 animate-fade-in-up stagger-3">
              <MapPin size={18} className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up stagger-4">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-blue-600/25 btn-transition"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 rounded-full px-8 py-6 text-base font-semibold btn-transition"
                >
                  <Mail size={20} className="mr-2" />
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up stagger-5">
              <span className="text-sm text-slate-500">Find me on:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Avatar/Visual */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-2 border-blue-200/50 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-4 w-56 h-56 sm:w-72 sm:h-72 lg:w-[352px] lg:h-[352px] border-2 border-blue-300/40 rounded-full"></div>
              
              {/* Main avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full p-2 shadow-2xl shadow-blue-600/20">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">
                      DJ
                    </span>
                    <p className="text-slate-500 text-sm mt-2">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-white shadow-lg rounded-xl px-4 py-2 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-sm font-semibold text-slate-700">Python</span>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-white shadow-lg rounded-xl px-4 py-2 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="text-sm font-semibold text-slate-700">React</span>
              </div>
              <div className="absolute top-1/2 -right-8 sm:-right-12 bg-white shadow-lg rounded-xl px-4 py-2 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-sm font-semibold text-slate-700">ML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400 animate-bounce cursor-pointer" onClick={handleScrollToAbout}>
          <span className="text-xs mb-2">Scroll to explore</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
