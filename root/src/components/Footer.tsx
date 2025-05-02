
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '@/data/portfolioData';
import { FaKaggle } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { firstName, lastName, socialLinks } = portfolioData.personalInfo;
  
  return (
    <footer className="bg-muted/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              {firstName} {lastName}
              <span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {socialLinks.kaggle && (
              <a 
                href={socialLinks.kaggle} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Kaggle"
              >
                <FaKaggle size={20} />
              </a>
            )}
            <a 
              href={socialLinks.email} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
