
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline-container mt-10 pl-6 md:pl-0">
          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{
  experience: typeof portfolioData.experience[0];
  index: number;
}> = ({ experience, index }) => {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref}
      className={`fade-in-section ${isInView ? 'is-visible' : ''} timeline-item`}
    >
      <div className="timeline-dot"></div>
      
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''} bg-card p-6 rounded-lg shadow-md border border-border`}>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <h4 className="text-lg text-primary mb-2">{experience.company}</h4>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{experience.startDate} - {experience.endDate}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin size={14} className="mr-1" />
          <span>{experience.location}</span>
        </div>
        
        <ul className="list-disc pl-5 space-y-1">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
