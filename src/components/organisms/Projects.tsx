import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../molecules/ProjectCard';
import { projects } from '../../data/projects';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Briefcase, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'ai', label: 'AI & Analytics' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase size={32} className="text-primary-500" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white">
              Our <span className="text-primary-500">Projects</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering innovative software solutions across various industries and technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mr-4">
            <Filter size={16} />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.key
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Featured Projects
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    featured={true}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div>
              {featuredProjects.length > 0 && (
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
                  More Projects
                </h3>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + featuredProjects.length}
                    featured={false}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-primary-50 to-accent-orange/10 dark:from-gray-700 dark:to-gray-600 rounded-2xl"
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our proven expertise 
            and innovative approach to software development.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};