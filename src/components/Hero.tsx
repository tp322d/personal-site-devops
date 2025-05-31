import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Server, GitBranch } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a DevOps & System Engineer";
  const typingSpeed = 100;
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative inline-block text-xs font-semibold text-teal-600 dark:text-teal-400 mb-4 px-3 py-1 border border-teal-600 dark:border-teal-400 rounded-full">
              <span>Available for hire</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Hello, I'm Tedo Patsatsia
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6 h-8">
              {typedText}
              <span className={`text-teal-600 dark:text-teal-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              Specializing in automating, optimizing, and maintaining modern infrastructure. 
              I build reliable systems and streamline development workflows with cutting-edge DevOps practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
              >
                Get in touch
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-teal-600 dark:hover:border-teal-500 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors duration-300 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative z-10 bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">terminal</div>
                </div>
                <div className="font-mono text-sm text-gray-800 dark:text-gray-200 space-y-2">
                  <p><span className="text-green-600 dark:text-green-500">➜</span> <span className="text-blue-600 dark:text-blue-400">~</span> whoami</p>
                  <p>DevOpsEngineer</p>
                  <p><span className="text-green-600 dark:text-green-500">➜</span> <span className="text-blue-600 dark:text-blue-400">~</span> ls skills</p>
                  <p>
                    <span className="text-yellow-600 dark:text-yellow-400">Docker</span> <span className="text-yellow-600 dark:text-yellow-400">Kubernetes</span> <span className="text-yellow-600 dark:text-yellow-400">AWS</span> <span className="text-yellow-600 dark:text-yellow-400">Terraform</span> <span className="text-yellow-600 dark:text-yellow-400">CI/CD</span>
                  </p>
                  <p><span className="text-green-600 dark:text-green-500">➜</span> <span className="text-blue-600 dark:text-blue-400">~</span> cat mission.txt</p>
                  <p>Building resilient infrastructure and automating everything possible</p>
                  <p className="flex items-center"><span className="text-green-600 dark:text-green-500">➜</span> <span className="text-blue-600 dark:text-blue-400">~</span> <span className="animate-pulse">_</span></p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-teal-200 dark:bg-teal-900/50 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a 
            href="#skills" 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-500 hover:border-teal-600 dark:hover:border-teal-500 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;