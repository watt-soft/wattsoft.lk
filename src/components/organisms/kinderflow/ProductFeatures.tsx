import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Receipt,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Lock,
  TrendingUp,
  Calendar,
  BarChart3,
  CheckCircle,
  PlusCircle,
  Layers,
  Sparkles
} from 'lucide-react';
import { kinderFlowData } from '../../../data/kinderflow';
import { KinderFlowFeatureCategory } from '../../../types';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export const ProductFeatures: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'core' | 'advanced'>('all');
  const { whatYouGetIntro, coreFeatures, advancedFeatures } = kinderFlowData;
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return Users;
      case 'Receipt':
        return Receipt;
      case 'BookOpen':
        return BookOpen;
      case 'MessageSquare':
        return MessageSquare;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Lock':
        return Lock;
      case 'TrendingUp':
        return TrendingUp;
      case 'Calendar':
        return Calendar;
      case 'BarChart3':
        return BarChart3;
      default:
        return Layers;
    }
  };

  const renderFeatureCard = (cat: KinderFlowFeatureCategory, isAdvanced: boolean) => {
    const IconComponent = getCategoryIcon(cat.icon);

    return (
      <motion.div
        key={cat.category}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white dark:bg-gray-800 border transition-all duration-300 hover:shadow-xl ${
          isAdvanced
            ? 'border-teal-200/80 dark:border-teal-900/60 hover:border-teal-400'
            : 'border-sky-200/80 dark:border-sky-900/60 hover:border-sky-400'
        }`}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm ${
                isAdvanced
                  ? 'bg-teal-600 text-white'
                  : 'bg-sky-600 text-white'
              }`}
            >
              <IconComponent size={22} />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-400">
                {cat.number}
              </span>
              <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white leading-tight">
                {cat.category}
              </h3>
            </div>
          </div>

          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
              isAdvanced
                ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-200 dark:border-teal-800'
                : 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border-sky-200 dark:border-sky-800'
            }`}
          >
            {isAdvanced ? 'Advanced Add-on' : 'Core Feature'}
          </span>
        </div>

        {/* Short Summary if available */}
        {cat.summary && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 italic">
            {cat.summary}
          </p>
        )}

        {/* Feature Items List */}
        <div className="space-y-3.5 flex-grow">
          {cat.items.map((item) => (
            <div
              key={item.title}
              className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700/60"
            >
              <div className="flex items-start gap-2.5">
                {isAdvanced ? (
                  <PlusCircle size={16} className="text-teal-500 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle size={16} className="text-sky-500 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="features" className="py-20 bg-gray-50/70 dark:bg-gray-900">
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
            <span>Comprehensive Modules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            What You <span className="text-sky-600 dark:text-sky-400">Get</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {whatYouGetIntro}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                selectedTab === 'all'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              All Features (9 Modules)
            </button>
            <button
              onClick={() => setSelectedTab('core')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                selectedTab === 'core'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              Core Features (5 Modules)
            </button>
            <button
              onClick={() => setSelectedTab('advanced')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                selectedTab === 'advanced'
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              Advanced Add-ons (4 Modules)
            </button>
          </div>
        </motion.div>

        {/* Core Features Block */}
        {(selectedTab === 'all' || selectedTab === 'core') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-200 dark:border-gray-700 pb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                01
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Core Features
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Essential tools designed to manage your preschool's day-to-day operations out of the box.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((cat) => renderFeatureCard(cat, false))}
            </div>
          </div>
        )}

        {/* Advanced Features Block */}
        {(selectedTab === 'all' || selectedTab === 'advanced') && (
          <div id="advanced" className="pt-4">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-200 dark:border-gray-700 pb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                02
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Advanced Features & Add-ons
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Continuous improvements, safety enhancements, and optional modules to support growth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {advancedFeatures.map((cat) => renderFeatureCard(cat, true))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
