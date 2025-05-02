
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      className="rounded-full animate-float relative"
    >
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-md animate-pulse"></div>
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-all transform rotate-0 hover:rotate-12 hover:text-primary z-10" />
      ) : (
        <Sun className="h-5 w-5 transition-all transform rotate-0 hover:rotate-45 hover:text-primary z-10" />
      )}
    </Button>
  );
};

export default ThemeToggle;
