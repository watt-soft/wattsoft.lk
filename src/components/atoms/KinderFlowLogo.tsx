import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface KinderFlowLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  poweredByWattsoft?: boolean;
}

export const KinderFlowLogo: React.FC<KinderFlowLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
  poweredByWattsoft = false
}) => {
  const { isDark } = useTheme();

  const sizes = {
    sm: { img: 'h-10 w-10', text: 'text-lg', sub: 'text-xs' },
    md: { img: 'h-14 w-14', text: 'text-2xl', sub: 'text-xs' },
    lg: { img: 'h-20 w-20', text: 'text-3xl md:text-4xl', sub: 'text-sm' },
    xl: { img: 'h-24 w-24 md:h-28 md:w-28', text: 'text-4xl md:text-5xl', sub: 'text-sm md:text-base' }
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="inline-flex items-center gap-2">
        {/* Light mode logo icon */}
        <img
          src="kinderflow-logo.png"
          alt="KinderFlow Logo"
          className={`${sizes[size].img} object-contain shrink-0 scale-125 ${isDark ? 'hidden' : 'block'} dark:hidden`}
        />

        {/* Dark mode logo icon */}
        <img
          src="kinderflow-logo-white.png"
          alt="KinderFlow Logo"
          className={`${sizes[size].img} object-contain shrink-0 scale-125 ${isDark ? 'block' : 'hidden'} hidden dark:block`}
        />

        {/* Brand Text */}
        <div className="flex flex-col justify-center">
          <span className={`font-heading font-extrabold tracking-tight text-[#162841] dark:text-white leading-none ${sizes[size].text}`}>
            Kinder<span className="text-[#2292c9] dark:text-[#38bdf8]">Flow</span>
          </span>
          {showSubtitle && (
            <span className={`font-semibold text-[#2292c9] dark:text-[#38bdf8] tracking-wide mt-1 ${sizes[size].sub}`}>
              Preschool Management System
            </span>
          )}
        </div>
      </div>

      {poweredByWattsoft && (
        <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <span>Powered by</span>
          <span className="font-heading font-bold tracking-wide text-primary-500 dark:text-primary-400">
            WATTSOFT
          </span>
        </div>
      )}
    </div>
  );
};
