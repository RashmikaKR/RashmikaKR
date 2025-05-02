
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const { personalInfo } = portfolioData;
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real implementation, you would send this data to a server or service like EmailJS
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid md:grid-cols-2 gap-10 mt-10`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-6">
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href={personalInfo.socialLinks.email} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                />
              </div>
              
              <div>
                <Input 
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                />
              </div>
              
              <div>
                <Input 
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                />
              </div>
              
              <div>
                <Textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows={6}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send size={16} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
