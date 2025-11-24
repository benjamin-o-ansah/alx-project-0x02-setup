// components/common/PostCard.tsx

import React from 'react';
import { type PostCardProps } from '@/interfaces';

const PostCard: React.FC<PostCardProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2 capitalize leading-snug">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {body}
        </p>
      </div>
      <div className="pt-3 border-t">
        <span className="text-xs font-medium text-red-600">
          User ID: {userId}
        </span>
      </div>
    </div>
  );
};

export default PostCard;