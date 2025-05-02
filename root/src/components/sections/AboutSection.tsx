
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { bio, location, email, phone } = portfolioData.personalInfo;
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid md:grid-cols-2 gap-10 items-center`}
        >
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <img 
              src="https://placehold.co/600x600" 
              alt="Profile" 
              className="w-full h-auto rounded-2xl hover:opacity-90 transition-opacity"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{bio}</p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Currently Working On</p>
                  <p className="font-medium">Deep Learning for Epileptic Seizure Detection</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors transform hover:translate-y-[-2px] hover:shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
