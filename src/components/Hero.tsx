
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
    console.log('Resume download initiated');
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            John Developer
          </h1>
          
          <p className={`text-xl md:text-2xl mb-4 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            Backend Developer | Node.js | PostgreSQL
          </p>
          
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Crafting scalable backend solutions with modern technologies and microservices architecture
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={downloadResume}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className={`px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
