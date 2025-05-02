
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const { achievements } = portfolioData;

  // Group achievements by year
  const achievementsByYear = achievements.reduce((acc, achievement) => {
    const year = achievement.date.toString().split('-')[0]; // Extract year
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(achievement);
    return acc;
  }, {} as Record<string, typeof achievements>);

  // Sort years in descending order
  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Achievements & Certifications</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} space-y-12 mt-10`}
        >
          {sortedYears.map((year) => (
            <div key={year} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary/90">{year}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievementsByYear[year].map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:translateY(-2px) hover:border-primary/30"
                  >
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{achievement.date}</span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{achievement.description}</p>
                    
                    {achievement.credential && (
                      <a
                        href={achievement.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="mr-1">View Credential</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-card border border-border p-8 rounded-xl shadow-md max-w-2xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Microsoft Certified AI Engineer Associate</h3>
            </div>
            <p className="text-foreground/80 mb-6">
              Professional certification validating expertise in designing and implementing AI solutions, machine learning models, and cognitive services in Azure.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
              >
                <span className="mr-2">View Certificate</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
