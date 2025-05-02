
import React, { useState } from 'react';
import portfolioData from '@/data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const { ref, isInView } = useInView();
  
  // Define project categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'web', label: 'Web Dev' }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = categoryFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === categoryFilter);

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-background rounded-lg p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`category-tab ${
                  categoryFilter === category.id ? 'active' : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid md:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {filteredProjects.map((project, index) => (
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
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={24} className="text-white" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={24} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category === 'ai-ml' ? 'AI/ML' : 
                     project.category === 'fullstack' ? 'Full Stack' : 'Web'}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubLink && (
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
                  )}
                  {project.liveLink && (
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
                  )}
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
