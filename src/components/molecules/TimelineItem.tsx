import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isVisible: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  item, 
  index, 
  isVisible 
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <span className="text-primary-500 font-bold text-lg">{item.year}</span>
          <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mt-2 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      
      <div className="relative flex items-center justify-center">
        <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${
          item.milestone ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
        } shadow-lg z-10`}></div>
        {index < 6 && (
          <div className="absolute top-4 w-0.5 h-16 bg-gray-200 dark:bg-gray-600"></div>
        )}
      </div>
      
      <div className="flex-1"></div>
    </motion.div>
  );
};