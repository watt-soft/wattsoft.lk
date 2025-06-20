import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Cloud, Zap } from 'lucide-react';
import { Button } from '../atoms/Button';

export const Hero: React.FC = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Smartphone, delay: 0.5, x: -15, y: 30 },
    { Icon: Cloud, delay: 1, x: 20, y: -10 },
    { Icon: Zap, delay: 1.5, x: -10, y: -20 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-orange/20 dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-teal rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-full text-sm font-medium"
            >
              <Zap size={16} />
              Innovative Software Solutions
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
              Empowering Businesses with{' '}
              <span className="text-primary-500">Innovative</span>{' '}
              Software Solutions
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Transform your digital presence with cutting-edge web development, mobile applications, 
              and cloud solutions designed to accelerate your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                onClick={() => {
                const target = document.querySelector("#contact");
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              >
                Start Your Project
              </Button>
              {/* <Button variant="secondary" size="lg">
                View Our Work
              </Button> */}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {[
                // { number: '200+', label: 'Projects Completed' },
                // { number: '50+', label: 'Happy Clients' },
                // { number: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-primary-500 to-accent-orange rounded-xl p-6 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.8 }}
                className="absolute"
                style={{
                  top: `${50 + y}%`,
                  left: `${50 + x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <Icon size={20} className="text-primary-500" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};