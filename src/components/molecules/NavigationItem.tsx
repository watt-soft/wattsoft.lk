import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  children,
  onClick,
  className = '',
  isActive
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentActive =
    isActive !== undefined
      ? isActive
      : href.startsWith('/')
      ? location.pathname === href
      : false;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an external link or telephone/email
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      onClick?.();
      return;
    }

    e.preventDefault();

    // If navigating to a route like /product or /
    if (href.startsWith('/')) {
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      onClick?.();
      return;
    }

    // If navigating to an in-page anchor like #services or #contact
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate home and then scroll to the anchor
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 120);
      }
      onClick?.();
    }
  };

  return (
    <a
      href={href.startsWith('/') ? `#${href}` : href}
      onClick={handleClick}
      className={`transition-colors duration-200 font-medium cursor-pointer ${
        isCurrentActive
          ? 'text-primary-500 dark:text-primary-400 font-semibold'
          : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
      } ${className}`}
    >
      {children}
    </a>
  );
};