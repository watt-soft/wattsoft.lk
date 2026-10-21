import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle2, Users, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { KinderFlowLogo } from '../../atoms/KinderFlowLogo';
import { Button } from '../../atoms/Button';

export const ProductHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'attendance' | 'fees' | 'growth'>('attendance');

  const scrollToConnect = () => {
    document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:pt-8 md:pb-20">
      {/* Background with KinderFlow soft sky-blue / teal tints */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Brand Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 rounded-full text-xs sm:text-sm font-semibold shadow-sm"
            >
              <Sparkles size={14} className="text-sky-600 dark:text-sky-400" />
              <span>KinderFlow Preschool Management System</span>
            </motion.div>

            {/* Logo Display */}
            <div>
              <KinderFlowLogo size="lg" showSubtitle={false} poweredByWattsoft={true} className="items-center lg:items-start" />
            </div>

            {/* Slogan & Title with KinderFlow Sky/Teal Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 dark:text-white leading-[1.15]">
              One Connected Platform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-sky-700 dark:from-sky-400 dark:via-teal-300 dark:to-sky-300">
                Simpler Everyday Management.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              KinderFlow is an all-in-one, subscription-based digital platform crafted specifically to bring preschool administrators, teachers, and parents together. Simplify admissions, attendance, fee tracking, and child milestones with zero administrative hassle.
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-sky-200/70 dark:border-gray-700 shadow-sm">
                <CheckCircle2 size={14} className="text-teal-500" /> Zero Software License Fee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-sky-200/70 dark:border-gray-700 shadow-sm">
                <CheckCircle2 size={14} className="text-teal-500" /> Web & Mobile Accessible
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-sky-200/70 dark:border-gray-700 shadow-sm">
                <CheckCircle2 size={14} className="text-teal-500" /> Expandable to School Management
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={scrollToConnect}
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>Schedule a Demo</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToFeatures}
                className="px-6 py-3.5 rounded-xl font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 transition-colors inline-flex items-center justify-center gap-2 text-base shadow-sm"
              >
                <span>Explore Features</span>
                <ChevronRight size={18} />
              </button>
              <a
                href="tel:+94767796422"
                className="px-5 py-3.5 rounded-xl font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 transition-colors inline-flex items-center justify-center gap-2 text-base"
              >
                <PhoneCall size={18} className="text-sky-600 dark:text-sky-400" />
                <span>+94 (76) 779 6422</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Product Showcase Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Card Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-teal-500 to-sky-600 rounded-3xl blur-lg opacity-35"></div>

              {/* Interactive Dashboard Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Window top bar */}
                <div className="px-5 py-3.5 bg-gray-50 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 ml-2">
                      KinderFlow Portal
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300">
                    Live Demo
                  </span>
                </div>

                {/* Dashboard Tab Selector */}
                <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 px-3 pt-2 gap-1 text-xs">
                  <button
                    onClick={() => setActiveTab('attendance')}
                    className={`px-3 py-2 rounded-t-lg font-medium transition-all ${activeTab === 'attendance'
                      ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 border-t-2 border-sky-500 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                      }`}
                  >
                    Attendance & Gate
                  </button>
                  <button
                    onClick={() => setActiveTab('fees')}
                    className={`px-3 py-2 rounded-t-lg font-medium transition-all ${activeTab === 'fees'
                      ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 border-t-2 border-sky-500 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                      }`}
                  >
                    Fee Collection
                  </button>
                  <button
                    onClick={() => setActiveTab('growth')}
                    className={`px-3 py-2 rounded-t-lg font-medium transition-all ${activeTab === 'growth'
                      ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 border-t-2 border-sky-500 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                      }`}
                  >
                    Child Progress
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="p-6 space-y-4 bg-white dark:bg-gray-900">
                  {activeTab === 'attendance' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Today's Attendance</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">96.4% Present</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          Gate Active
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold">
                              KS
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">Kavindu Senanayake</p>
                              <p className="text-gray-500 dark:text-gray-400">Class: Butterflies (Junior)</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-medium">
                            Checked-in • 07:48 AM
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                              AM
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">Amani Madushika</p>
                              <p className="text-gray-500 dark:text-gray-400">Class: Sunflowers (Nursery)</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-medium">
                            Checked-in • 08:02 AM
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-sky-500" />
                          Authorized Pick-up Verification
                        </span>
                        <span className="text-sky-600 dark:text-sky-400 font-medium">Instant SMS/Push</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'fees' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Term Fee Collection Status</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">Rs. 485,000 Collected</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
                          92% Cleared
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-sky-500 h-full rounded-full" style={{ width: '92%' }}></div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Automated Parent Reminders</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Dispatched</span>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Outstanding Invoices</span>
                          <span className="font-semibold text-orange-600 dark:text-orange-400">4 Accounts</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'growth' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Development Observations</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">Milestone Tracking</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
                          Updated
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-lg bg-teal-50/60 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40">
                          <p className="font-semibold text-teal-900 dark:text-teal-200">Motor & Social Development</p>
                          <p className="text-teal-700 dark:text-teal-400 text-xs mt-0.5">
                            Teacher notes logged with photo verification. Available instantly in parent account.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40">
                          <p className="font-semibold text-sky-900 dark:text-sky-200">Homework & Term Evaluation</p>
                          <p className="text-sky-700 dark:text-sky-400 text-xs mt-0.5">
                            Term assessments ready for digital download and export.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dashboard Footer Banner */}
                <div className="px-6 py-3.5 bg-gradient-to-r from-sky-600 via-sky-700 to-teal-700 text-white flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <Users size={14} /> Administrators • Teachers • Parents Connected
                  </span>
                  <span className="underline decoration-white/50 cursor-pointer" onClick={scrollToFeatures}>
                    See All Specs
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
