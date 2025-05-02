
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';

const SkillCategory = ({
  title,
  skills
}) => {
  const { ref, isInView } = useInView();
  
  return (
    <div className="mb-10 relative">
      <h3 className="text-2xl font-bold mb-6 text-primary">{title}</h3>
      
      <div 
        ref={ref}
        className={`fade-in-section ${isInView ? 'is-visible' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10`}
      >
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-card p-4 rounded-lg border border-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-foreground/70">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: isInView ? `${skill.level}%` : '0%',
                  transition: `width 1s ease-out ${index * 0.1}s` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { skills } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div ref={ref} className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <SkillCategory title="Programming Languages" skills={skills.programmingLanguages} />
          <SkillCategory title="Frontend" skills={skills.frontend} />
          <SkillCategory title="Backend" skills={skills.backend} />
          <SkillCategory title="AI & Machine Learning" skills={skills.ai_ml} />
          <SkillCategory title="Tools & Platforms" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
