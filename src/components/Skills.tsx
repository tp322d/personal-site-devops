import React from 'react';
import { skillsData } from '../data/skillsData';
import { Cloud, Server, Code, GitBranch, Database, Shield, Network, Terminal } from 'lucide-react';

const SkillIcon: React.FC<{ category: string }> = ({ category }) => {
  switch (category) {
    case 'Cloud Platforms':
      return <Cloud className="w-6 h-6" />;
    case 'Infrastructure':
      return <Server className="w-6 h-6" />;
    case 'CI/CD':
      return <GitBranch className="w-6 h-6" />;
    case 'Coding':
      return <Code className="w-6 h-6" />;
    case 'Databases':
      return <Database className="w-6 h-6" />;
    case 'Security':
      return <Shield className="w-6 h-6" />;
    case 'Networking':
      return <Network className="w-6 h-6" />;
    default:
      return <Terminal className="w-6 h-6" />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills\" className="py-16 bg-gray-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of skills focused on building, deploying, and maintaining modern infrastructure and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div 
              key={category.name}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400 mr-3">
                  <SkillIcon category={category.name} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;