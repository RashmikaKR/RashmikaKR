
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';

// Import appropriate icons based on skill name
const getIconClass = (skillName: string) => {
  const name = skillName.toLowerCase();
  
  // Map of skill names to icon classes
  if (name.includes('react')) return 'bg-blue-500';
  if (name.includes('node')) return 'bg-green-500';
  if (name.includes('javascript')) return 'bg-yellow-500';
  if (name.includes('typescript')) return 'bg-blue-400';
  if (name.includes('python')) return 'bg-blue-600';
  if (name.includes('html')) return 'bg-orange-500';
  if (name.includes('css')) return 'bg-blue-500';
  if (name.includes('tailwind')) return 'bg-sky-400';
  if (name.includes('mongo')) return 'bg-green-600';
  if (name.includes('postgres')) return 'bg-blue-600';
  if (name.includes('sql')) return 'bg-blue-500';
  if (name.includes('git')) return 'bg-orange-600';
  if (name.includes('aws')) return 'bg-yellow-600';
  if (name.includes('docker')) return 'bg-blue-500';
  if (name.includes('java')) return 'bg-red-500';
  if (name.includes('c')) return 'bg-indigo-500';
  if (name.includes('tensorflow')) return 'bg-orange-600';
  if (name.includes('pytorch')) return 'bg-red-600';
  if (name.includes('flask')) return 'bg-gray-600';
  if (name.includes('pandas')) return 'bg-blue-400';
  if (name.includes('numpy')) return 'bg-blue-500';
  if (name.includes('scikit') || name.includes('sklearn')) return 'bg-orange-500';
  if (name.includes('opencv')) return 'bg-green-500';
  
  // Default icon for other skills
  return 'bg-primary';
};

const SkillIcon: React.FC<{ name: string; icon?: string }> = ({ name, icon }) => {
  const iconClass = getIconClass(name);
  
  return (
    <div 
      className={`absolute rounded-full w-12 h-12 ${iconClass} flex items-center justify-center text-white text-xs font-bold animate-float opacity-70`} 
      style={{ 
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}
    >
      {icon ? (
        <i className={`icon-${icon}`}></i>
      ) : (
        name.substring(0, 2)
      )}
    </div>
  );
};

const SkillCategory: React.FC<{
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}> = ({ title, skills }) => {
  const { ref, isInView } = useInView();
  
  return (
    <div className="mb-10 relative">
      <h3 className="text-2xl font-bold mb-6 text-primary">{title}</h3>
      
      {/* Floating icons in the background */}
      <div className="absolute inset-0 overflow-hidden h-full w-full pointer-events-none">
        {skills.map((skill, i) => (
          <SkillIcon key={`float-${i}`} name={skill.name} icon={skill.icon} />
        ))}
      </div>
      
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

const SkillsSection: React.FC = () => {
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
