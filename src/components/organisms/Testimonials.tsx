import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from '../molecules/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../contexts/ThemeContext';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const { isDark } = useTheme();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isIntersecting) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isIntersecting]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary-500">Clients</span>
          </h2>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Wattsoft and the results we've delivered.
          </p> */}
        </motion.div>

        {/* Testimonial Carousel */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        > */}
          {/* Main Testimonial */}
          {/* <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
              >
                <TestimonialCard 
                  testimonial={testimonials[currentIndex]} 
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div> */}

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button> */}

          {/* Pagination Dots */}
          {/* <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div> */}

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center font-semibold text-gray-700 dark:text-gray-200 text-base transition-transform duration-200 hover:scale-105"
              >
                {(testimonial.logoOriginal || testimonial.logoWhite) && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex items-center justify-center mb-2 transition-all duration-200 hover:shadow-xl">
                    <img
                      src={isDark ? testimonial.logoWhite : testimonial.logoOriginal}
                      alt={testimonial.company}
                      className="h-16 md:h-20 object-contain transition-all duration-300"
                      style={{ maxWidth: '120px' }}
                    />
                  </div>
                )}
                <span className="mt-1 text-sm md:text-base font-medium">{testimonial.company}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};