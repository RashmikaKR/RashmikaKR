
import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import StatsSection from '@/components/sections/StatsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize fade-in animations
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        
        if (isVisible) {
          section.classList.add('is-visible');
        }
      });
    };
    
    // Run once on initial load
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <StatsSection />
          <AchievementsSection />
          <LeadershipSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
