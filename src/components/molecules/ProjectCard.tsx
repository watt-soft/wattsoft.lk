import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, TrendingUp } from 'lucide-react';
import { Project } from '../../types';
import { Button } from '../atoms/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  featured = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: featured ? 1.02 : 1.05 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            featured ? 'h-64 lg:h-80' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <Github size={16} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className={`font-heading font-semibold text-gray-900 dark:text-white mb-2 ${
              featured ? 'text-2xl lg:text-3xl' : 'text-xl'
            }`}>
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={14} />
              <span>{project.completedDate}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="capitalize">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${
          featured ? 'text-lg' : ''
        }`}>
          {featured ? project.longDescription : project.description}
        </p>

        {/* Role & Contributions */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Role: {project.role}
          </h4>
          {featured && (
            <ul className="space-y-1">
              {project.contributions.slice(0, 3).map((contribution, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  {contribution}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 8 : 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 8 : 5) && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                +{project.technologies.length - (featured ? 8 : 5)} more
              </span>
            )}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-primary-500" />
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Key Results:
            </h4>
          </div>
          <div className={`grid gap-3 ${featured ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2'}`}>
            {project.outcomes.slice(0, featured ? 4 : 2).map((outcome, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-primary-500">
                  {outcome.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {outcome.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
              icon={<ExternalLink size={16} />}
              className="flex-1"
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(project.githubUrl, '_blank')}
              icon={<Github size={16} />}
              className={project.liveUrl ? '' : 'flex-1'}
            >
              {project.liveUrl ? '' : 'View Code'}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};