
import React, { useState } from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Award, Calendar, ExternalLink, Medal, GraduationCap, Trophy, Certificate } from 'lucide-react';

const AchievementsSection = () => {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState('achievements');
  const { achievements, certifications } = portfolioData;

  // Helper function to render achievement cards
  const renderAchievements = () => {
    // Group achievements by year
    const achievementsByYear = achievements.reduce((acc, achievement) => {
      const year = achievement.date.toString().split('-')[0]; // Extract year
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(achievement);
      return acc;
    }, {});

    // Sort years in descending order
    const sortedYears = Object.keys(achievementsByYear).sort((a, b) => parseInt(b) - parseInt(a));

    return (
      <div className="space-y-12">
        {sortedYears.map((year) => (
          <div key={year} className="space-y-6">
            <h3 className="text-2xl font-bold text-primary/90">{year}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievementsByYear[year].map((achievement, index) => (
                <div 
                  key={index}
                  className="achievement-card"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-4 shrink-0">
                      {achievement.type === 'competition' ? (
                        <Trophy className="h-6 w-6 text-primary" />
                      ) : achievement.type === 'award' ? (
                        <Medal className="h-6 w-6 text-primary" />
                      ) : (
                        <Award className="h-6 w-6 text-primary" />
                      )}
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Helper function to render certification cards
  const renderCertifications = () => {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="flex items-start">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-foreground/80 mb-1">
                  <span className="font-medium">Issued by:</span> {cert.issuer}
                </p>
                <p className="text-muted-foreground mb-3">
                  <Calendar size={14} className="inline mr-1" /> {cert.date}
                </p>
                <p className="text-foreground/80 mb-4">{cert.description}</p>
                
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="mr-1">View Credential</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Achievements & Certifications</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`category-tab ${
                activeTab === 'achievements' ? 'active' : ''
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`category-tab ${
                activeTab === 'certifications' ? 'active' : ''
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''}`}
        >
          {activeTab === 'achievements' ? renderAchievements() : renderCertifications()}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
