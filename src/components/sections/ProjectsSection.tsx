
import React, { useState } from 'react';
import portfolioData from '@/data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const { ref, isInView } = useInView();
  
  const projects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-background rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'featured' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Featured Projects
            </button>
          </div>
        </div>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid md:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-card shadow-md hover:shadow-xl rounded-lg overflow-hidden border border-border transform transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={24} className="text-white" />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={24} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Featured</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground/70 hover:text-primary flex items-center transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground/70 hover:text-primary flex items-center transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
