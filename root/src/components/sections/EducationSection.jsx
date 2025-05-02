
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const { ref, isInView } = useInView();
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10`}
        >
          {education.map((item, index) => (
            <div 
              key={index}
              className="education-card group"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-4 shrink-0 group-hover:bg-primary/20 transition-all">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.duration}</span>
                </div>
                <div className="font-medium text-foreground/80">
                  {item.score}
                </div>
              </div>
              
              <div className="w-full h-1 bg-muted/50 mt-4 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary/40 to-primary transition-all origin-left"
                  style={{
                    width: `${Math.min(parseFloat(item.score) * 10, 100)}%`,
                    transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
                    transition: `transform 1s ease-out ${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
