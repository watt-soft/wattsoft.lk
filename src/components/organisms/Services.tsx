import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../molecules/ServiceCard';
import { services } from '../../data/services';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type ServiceCategory = 'all' | 'web' | 'mobile' | 'cloud' | 'ai' | 'automation' | 'marketing' | 'hardware' | 'networking' | 'infrastructure';

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'cloud', label: 'Cloud Solutions' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'automation', label: 'Business Automation' },
    { key: 'marketing', label: 'Digital Marketing' },
    { key: 'infrastructure', label: 'IT Infrastructure' },
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => 
        Array.isArray(service.category)
          ? service.category.includes(activeFilter)
          : service.category === activeFilter
      );

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive software solutions tailored to meet your business needs 
            and drive digital transformation across all platforms.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key as ServiceCategory)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.key
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};