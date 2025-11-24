// components/common/Card.tsx

// Adjust path based on your structure
import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;