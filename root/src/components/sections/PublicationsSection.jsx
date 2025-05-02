
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const PublicationsSection = () => {
  const { ref, isInView } = useInView();
  const { publications, contributions } = portfolioData;

  return (
    <section id="publications" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Publications & Contributions</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} space-y-10 mt-10`}
        >
          {/* Publications */}
          {publications.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-primary/90 mb-6">Publications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.map((pub, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
                  >
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 shrink-0">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{pub.title}</h3>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{pub.date}</span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{pub.description || pub.journal}</p>
                    
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="mr-1">{pub.doi ? "DOI: " + pub.doi : "View Publication"}</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Contributions */}
          {contributions.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-primary/90 mb-6">Open Source & Research Contributions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributions.map((contrib, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
                  >
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 shrink-0">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{contrib.title}</h3>
                        <p className="text-muted-foreground">{contrib.platform}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{contrib.date}</span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{contrib.description}</p>
                    
                    {contrib.link && (
                      <a
                        href={contrib.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="mr-1">View Contribution</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
