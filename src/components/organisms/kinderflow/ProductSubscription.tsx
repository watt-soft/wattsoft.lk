import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Key, Headphones, RefreshCw, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';
import { kinderFlowData } from '../../../data/kinderflow';
import { KinderFlowSubscriptionPillar } from '../../../types';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export const ProductSubscription: React.FC = () => {
  const { subscriptionModel } = kinderFlowData;
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck':
        return CalendarCheck;
      case 'Key':
        return Key;
      case 'Headphones':
        return Headphones;
      case 'RefreshCw':
        return RefreshCw;
      case 'Layers':
        return Layers;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return CheckCircle2;
    }
  };

  const scrollToConnect = () => {
    document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="subscription" className="py-20 bg-gray-50/70 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-4">
            <RefreshCw size={13} />
            <span>Modern SaaS Delivery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            A Flexible <span className="text-sky-600 dark:text-sky-400">Subscription Model</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subscriptionModel.intro}
          </p>
        </motion.div>

        {/* Highlight Banner: No IT Overhead */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 p-8 rounded-2xl bg-gradient-to-r from-sky-600 via-teal-600 to-sky-700 text-white shadow-xl shadow-sky-600/15 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-heading font-bold flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 size={24} className="text-emerald-300" />
              Zero Infrastructure or Server Maintenance
            </h3>
            <p className="text-sky-100 max-w-xl text-base">
              Wattsoft handles database backups, updates, security, and cloud hosting so your educators can focus 100% on the children.
            </p>
          </div>
          <button
            onClick={scrollToConnect}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-sky-800 hover:bg-gray-100 font-bold shadow-md transition-colors text-sm"
          >
            Get Custom Quote
          </button>
        </motion.div>

        {/* 6 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionModel.pillars.map((pillar: KinderFlowSubscriptionPillar, idx: number) => {
            const Icon = getPillarIcon(pillar.icon);
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 border border-emerald-100 dark:border-emerald-900/50">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>Included in subscription</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
