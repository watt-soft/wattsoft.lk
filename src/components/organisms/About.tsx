import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../molecules/TimelineItem';
import { timelineData } from '../../data/timeline';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const stats = [
    { icon: Users, number: '50+', label: 'Team Members', color: 'text-blue-500' },
    { icon: Award, number: '200+', label: 'Projects Delivered', color: 'text-green-500' },
    { icon: Globe, number: '15+', label: 'Countries Served', color: 'text-purple-500' },
    { icon: Lightbulb, number: '5+', label: 'Years Innovation', color: 'text-orange-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-primary-500">Wattsoft</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded in 2018, Wattsoft has been at the forefront of digital innovation, 
            helping businesses transform their operations through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isIntersecting ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-4`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              title: 'Innovation First',
              description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.',
              icon: '🚀'
            },
            {
              title: 'Client Success',
              description: 'Your success is our priority. We work closely with clients to ensure every project exceeds expectations.',
              icon: '🎯'
            },
            {
              title: 'Quality Excellence',
              description: 'We maintain the highest standards in code quality, design, and project delivery.',
              icon: '⭐'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-orange/10 dark:from-gray-700 dark:to-gray-600 rounded-xl"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h3>
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isVisible={isIntersecting}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};