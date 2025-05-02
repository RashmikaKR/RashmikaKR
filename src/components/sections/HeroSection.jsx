
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

const HeroSection = () => {
  const { firstName, lastName, title, tagline, socialLinks } = portfolioData.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="section-container z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary/70">{firstName} {lastName}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground/70">
            {title}
          </h2>
          <p className="text-xl md:text-2xl mb-10">{tagline}</p>
          
          <div className="flex space-x-6">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} className="transform hover:scale-110 transition-transform" />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="transform hover:scale-110 transition-transform" />
            </a>
            {socialLinks.kaggle && (
              <a 
                href={socialLinks.kaggle} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Kaggle"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transform hover:scale-110 transition-transform"
                >
                  <path d="M12 10.8V14.4"/>
                  <path d="M8.4 14.4 H 15.6"/>
                  <path d="M19.2 21.6H4.8a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v14.4a2.4 2.4 0 0 1-2.4 2.4Z"/>
                </svg>
              </a>
            )}
            <a 
              href={socialLinks.email} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={28} className="transform hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
