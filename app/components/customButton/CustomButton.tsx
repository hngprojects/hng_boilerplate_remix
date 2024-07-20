import React from 'react';
import { Link } from '@remix-run/react';
import { Loader } from 'lucide-react';

interface ButtonProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  isLoading?: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  isLoading,
  href,
  children,
  onClick,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm';
  const loadingClasses = 'opacity-75 cursor-not-allowed';
  const buttonClasses = `${baseClasses} ${className} ${isLoading ? loadingClasses : ''}`;

  const content = (
    <>
      {isLoading && <Loader className=" animate-spin" />}
      {leftIcon && !isLoading && <span className="">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={buttonClasses} aria-busy={isLoading}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isLoading}
      aria-busy={isLoading}
    >
      {content}
    </button>
  );
};

export default Button;
