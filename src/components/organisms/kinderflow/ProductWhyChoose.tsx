import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, HeartHandshake, Eye, Award, Compass, Rocket } from 'lucide-react';
import { kinderFlowData } from '../../../data/kinderflow';
import { KinderFlowWhyChoose } from '../../../types';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export const ProductWhyChoose: React.FC = () => {
  const { whyChoose } = kinderFlowData;
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const getReasonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Clock':
        return Clock;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Eye':
        return Eye;
      case 'Award':
        return Award;
      case 'Compass':
        return Compass;
      case 'Rocket':
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-4">
            <Sparkles size={13} />
            <span>Key Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="text-sky-600 dark:text-sky-400">KinderFlow?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how KinderFlow transforms everyday preschool challenges into smooth, joyful, and transparent operations for your entire community.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.map((item: KinderFlowWhyChoose, index: number) => {
            const Icon = getReasonIcon(item.icon);
            const isHighlighted = item.title.includes('Grow Beyond Preschool');

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${isHighlighted
                    ? 'bg-gradient-to-br from-sky-600 via-sky-700 to-teal-700 text-white lg:col-span-2 shadow-xl shadow-sky-600/20 border-transparent'
                    : 'bg-gray-50/80 dark:bg-gray-800/80 border-gray-200/80 dark:border-gray-700 hover:border-sky-300 dark:hover:border-sky-700'
                  }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold shadow-sm ${isHighlighted
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : 'bg-white dark:bg-gray-900 text-sky-600 dark:text-sky-400 border border-gray-100 dark:border-gray-700'
                      }`}
                  >
                    <Icon size={26} />
                  </div>
                  <span
                    className={`text-sm font-mono font-bold ${isHighlighted ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'
                      }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-heading font-bold mb-3 ${isHighlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`leading-relaxed ${isHighlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                    }`}
                >
                  {item.description}
                </p>

                {isHighlighted && (
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                    <span>Seamless Transition From Preschool to Full Primary / Secondary School</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
