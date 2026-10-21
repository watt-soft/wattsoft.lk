import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Logo } from '../atoms/Logo';
import { NavigationItem } from '../molecules/NavigationItem';
import { Button } from '../atoms/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTheme } from '../../contexts/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const { isDark, toggleDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isScrolled = scrollPosition > 50;
  const isProductPage = location.pathname.startsWith('/products/') || location.pathname === '/kinderflow';

  const navigationItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    // { href: '#projects', label: 'Projects' },
    { href: '/products/kinderflow', label: 'Product', isProduct: true },
    { href: '#about', label: 'About' },
    // { href: '#testimonials'  , label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleGetStarted = () => {
    if (isProductPage) {
      const target = document.querySelector('#connect') || document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isProductPage
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="flex items-center justify-between h-16 md:h-20 w-full min-w-0">
          <div
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <Logo size="md" navbar={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.href}
                href={item.href}
                isActive={item.isProduct ? isProductPage : undefined}
                className={item.isProduct ? 'flex items-center gap-1.5' : ''}
              >
                <span>{item.label}</span>
                {item.isProduct && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    KinderFlow
                  </span>
                )}
              </NavigationItem>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleGetStarted}
            >
              {isProductPage ? 'Request Demo' : 'Get Started'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <NavigationItem
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  isActive={item.isProduct ? isProductPage : undefined}
                  className="flex items-center justify-between text-lg py-1"
                >
                  <span>{item.label}</span>
                  {item.isProduct && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                      KinderFlow
                    </span>
                  )}
                </NavigationItem>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    handleGetStarted();
                    setTimeout(() => {
                      setIsMenuOpen(false);
                    }, 400);
                  }}
                >
                  {isProductPage ? 'Request KinderFlow Demo' : 'Get Started'}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};