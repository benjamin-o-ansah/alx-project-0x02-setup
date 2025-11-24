// components/common/Button.tsx

import React from 'react';
import { type ButtonProps, type ButtonSize, type ButtonShape } from '@/interfaces';

// --- Helper Functions to Map Props to Tailwind Classes ---

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case 'small':
      return 'px-3 py-1.5 text-sm'; // Smaller padding and font
    case 'medium':
      return 'px-5 py-2 text-base'; // Standard padding and font
    case 'large':
      return 'px-8 py-3 text-lg'; // Larger padding and font
    default:
      return 'px-5 py-2 text-base';
  }
};

const getShapeClasses = (shape: ButtonShape): string => {
  switch (shape) {
    case 'rounded-sm':
      return 'rounded-sm';
    case 'rounded-md':
      return 'rounded-md';
    case 'rounded-full':
      return 'rounded-full';
    default:
      return 'rounded-md';
  }
};

// --- Button Component ---

const Button: React.FC<ButtonProps> = ({ 
  size = 'medium', // Set default size
  shape = 'rounded-md', // Set default shape
  children, 
  className = '', // Default to empty string for className
  ...rest // Gather any remaining standard button props (e.g., onClick, type)
}) => {
  const sizeClasses = getSizeClasses(size);
  const shapeClasses = getShapeClasses(shape);
  
  // Combine all base, size, shape, and custom classes
  const baseClasses = 'font-semibold transition duration-200 ease-in-out shadow-sm';
  const defaultStyle = 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300';
  
  const finalClassName = `${baseClasses} ${defaultStyle} ${sizeClasses} ${shapeClasses} ${className}`;

  return (
    <button className={finalClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;