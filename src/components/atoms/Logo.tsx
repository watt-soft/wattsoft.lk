import React from 'react';
import { Zap } from 'lucide-react';

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
  const sizes = {
    sm: { icon: 20, text: 'text-lg' },
    md: { icon: 25, text: 'text-xl' },
    lg: { icon: 35, text: 'text-2xl' }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* <div className="bg-primary-500 p-2 rounded-lg">
        <Zap 
          size={sizes[size].icon} 
          className="text-white" 
        />
      </div> */}
      <img
        src={'wattsoft-logo.png'}
        alt="Wattsoft Logo"
        className={`h-[${sizes[size].icon * 1}px] w-auto object-cover scale-125 `}
        style={{
          maxHeight: sizes[size].icon * 1,
          objectPosition: 'center',
          ...(navbar ? { transform: 'scale(1.0)', zoom: '1.0' } : { transform: 'scale(1.0)', zoom: '1' })
        }}
      />
    </div>
  );
};