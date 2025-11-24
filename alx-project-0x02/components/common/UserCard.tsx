// components/common/UserCard.tsx

import React from 'react';
import { type UserCardProps } from '@/interfaces';

const UserCard: React.FC<UserCardProps> = ({ name, email, address, phone }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-purple-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-purple-600 mb-4">{email}</p>
      
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-semibold text-gray-800">Phone:</span> {phone}
        </p>
        <div className="border-t pt-2 mt-2">
          <p className="font-semibold text-gray-800 mb-1">Address:</p>
          <p>{address.suite}, {address.street}</p>
          <p>{address.city}, {address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;