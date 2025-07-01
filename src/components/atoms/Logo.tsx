import React from 'react';
import { Zap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  navbar?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  navbar = false
}) => {
  const { isDark } = useTheme();
  const sizes = {
    sm: { icon: 20, text: 'text-lg' },
    md: { icon: 30, text: 'text-xl' },
    lg: { icon: 35, text: 'text-2xl' }
  };

  // Responsive size for mobile in navbar
  const iconSize = navbar
    ? 'h-[24px] md:h-[30px]'
    : `h-[${sizes[size].icon}px]`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={'wattsoft-logo.png'}
        alt="Wattsoft Logo"
        className={`${iconSize} w-auto object-cover scale-125 transition-all duration-200`}
        style={{
          maxHeight: navbar ? undefined : sizes[size].icon,
          objectPosition: 'center',
          ...(navbar ? { transform: 'scale(1.2)', zoom: '1.3' } : { transform: 'scale(1.0)', zoom: '1' })
        }}
      />
    </div>
  );
};