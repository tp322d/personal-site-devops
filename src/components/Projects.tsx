import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Recent Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work in DevOps, infrastructure automation, and system engineering.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-2 py-1">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 flex justify-between border-t border-gray-200 dark:border-gray-700">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 dark:text-teal-500 hover:text-teal-700 dark:hover:text-teal-400 font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;