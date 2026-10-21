import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, School, Check, Sparkles } from 'lucide-react';
import { kinderFlowData } from '../../../data/kinderflow';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export const ProductWhatIs: React.FC = () => {
  const { whatIs } = kinderFlowData;
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const stakeholders = [
    {
      role: 'Preschool Administrators & Owners',
      icon: School,
      badge: 'Operational Control',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800',
      iconColor: 'text-sky-600 dark:text-sky-400',
      description:
        'Eliminate manual paperwork, track admissions, automate fee collection reminders, and gain high-level executive dashboards of your daily preschool operations.',
      benefits: [
        'Centralized student profiles and admissions',
        'Real-time fee tracking and overdue alerts',
        'Gate attendance monitoring with pickup security',
        'Executive financial and attendance analytics'
      ]
    },
    {
      role: 'Teachers & Educators',
      icon: GraduationCap,
      badge: 'Classroom Efficiency',
      badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
      iconColor: 'text-teal-600 dark:text-teal-400',
      description:
        'Spend less time filling logs by hand and more time guiding early childhood development. Easily record daily attendance, developmental notes, and share assignments.',
      benefits: [
        'Quick morning arrival and departure logs',
        'Continuous child development records',
        'Homework and learning activity sharing',
        'Direct monthly parent feedback and ratings'
      ]
    },
    {
      role: 'Parents & Families',
      icon: Heart,
      badge: 'Peace of Mind',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      iconColor: 'text-rose-600 dark:text-rose-400',
      description:
        'Stay closely informed about your child’s health, attendance, early milestones, and school events through convenient digital web and mobile access.',
      benefits: [
        'Immediate notifications for drop-off and pickup',
        'Multi-child access under a single parent account',
        'Clear payment history and upcoming fee notices',
        'Observation reports on child growth & learning'
      ]
    }
  ];

  return (
    <section id="what-is" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-4">
            <Sparkles size={13} />
            <span>Product Introduction</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            What is <span className="text-sky-600 dark:text-sky-400">KinderFlow?</span>
          </h2>
          <p className="text-xl font-medium text-sky-800 dark:text-sky-300 max-w-3xl mx-auto leading-relaxed mb-4">
            {whatIs.lead}
          </p>
          <div className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-3 leading-relaxed">
            <p>{whatIs.body1}</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">{whatIs.body2}</p>
          </div>
        </motion.div>

        {/* 3 Pillars / Stakeholder Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stakeholders.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="flex flex-col h-full bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-gray-200/80 dark:border-gray-700 hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-700 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center ${item.iconColor} border border-gray-100 dark:border-gray-700 group-hover:scale-105 transition-transform`}>
                    <Icon size={26} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                  {item.role}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Key Advantages
                  </p>
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Check size={16} className="text-teal-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
