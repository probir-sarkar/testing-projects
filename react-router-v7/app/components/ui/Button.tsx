import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-md font-medium flex items-center justify-center',
        variant === 'primary' && 'bg-indigo-600 text-white hover:bg-indigo-700',
        variant === 'secondary' && 'bg-white text-gray-900 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}