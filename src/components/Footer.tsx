import React from 'react';
import { Heart, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="h-6 w-6 text-teal-500 mr-2" />
            <span className="font-bold text-lg">Tedo Patsatsia</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0 md:mr-6">
              &copy; {currentYear} All rights reserved
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#home"
                className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
              >
                Home
              </a>
              <a 
                href="#skills"
                className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
              >
                Skills
              </a>
              <a 
                href="#projects"
                className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
              >
                Projects
              </a>
              <a 
                href="#contact"
                className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;