import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm mb-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
    </div>
  );
};

export default UserCard;