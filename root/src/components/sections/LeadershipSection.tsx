
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Users, Calendar } from 'lucide-react';

const LeadershipSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Leadership Roles</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10`}
        >
          {leadership.map((role, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{role.position}</h3>
                  <p className="text-muted-foreground">{role.organization}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar size={14} className="mr-1" />
                <span>{role.duration}</span>
              </div>
              
              <p className="text-foreground/80">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
