import React from 'react';
import { experienceData } from '../data/experienceData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey through various roles and projects in the DevOps and system engineering space.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                {/* Date for mobile */}
                <div className="md:hidden w-full mb-4 flex items-center justify-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200">
                    <Calendar className="w-4 h-4 mr-1" />
                    {experience.period}
                  </div>
                </div>
                
                {/* Left side (even items) */}
                {index % 2 === 0 && (
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.title}</h3>
                    <h4 className="text-lg font-medium text-teal-600 dark:text-teal-500 mb-2">{experience.company}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{experience.description}</p>
                  </div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 border-4 border-white dark:border-slate-800 flex items-center justify-center z-10">
                  <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                
                {/* Right side (odd items) */}
                {index % 2 !== 0 && (
                  <div className="hidden md:block w-1/2 pl-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.title}</h3>
                    <h4 className="text-lg font-medium text-teal-600 dark:text-teal-500 mb-2">{experience.company}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{experience.description}</p>
                  </div>
                )}
                
                {/* Content for mobile */}
                <div className="md:hidden w-full bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.title}</h3>
                  <h4 className="text-lg font-medium text-teal-600 dark:text-teal-500 mb-2">{experience.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;