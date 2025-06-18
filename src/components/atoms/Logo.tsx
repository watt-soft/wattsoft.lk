import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizes = {
    sm: { icon: 20, text: 'text-lg' },
    md: { icon: 24, text: 'text-xl' },
    lg: { icon: 32, text: 'text-2xl' }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary-500 p-2 rounded-lg">
        <Zap 
          size={sizes[size].icon} 
          className="text-white" 
        />
      </div>
      {showText && (
        <span className={`font-heading font-bold text-gray-900 dark:text-white ${sizes[size].text}`}>
          Wattsoft
        </span>
      )}
    </div>
  );
};