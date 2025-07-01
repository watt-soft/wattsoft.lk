import { on } from 'events';
import React from 'react';

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  children,
  onClick,
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Call onSuccess after a short delay to allow scroll to finish
      setTimeout(() => {
        onClick?.();
      }, 750); // Adjust delay as needed
    } else {
      onClick?.();
    }


  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium ${className}`}
    >
      {children}
    </a>
  );
};