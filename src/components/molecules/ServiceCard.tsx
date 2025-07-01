import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg group-hover:bg-primary-500 transition-colors duration-300">
          <IconComponent 
            size={24} 
            className="text-primary-500 group-hover:text-white transition-colors duration-300" 
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-end">
          {service.category.map((category: string, idx: number) => (
            <span
              key={idx}
              className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full uppercase tracking-wide"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Key Features:</h4>
        <ul className="space-y-1">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};