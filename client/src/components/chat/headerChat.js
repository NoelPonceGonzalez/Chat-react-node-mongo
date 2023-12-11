import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const HeaderChat = ({ username }) => {
  return (
    <div className="flex items-center justify-between w-1/6 h-12 bg-gray-200 p-2 border-r border-gray-300">
      <div className="flex items-center">
        <FaUserAlt className="text-2xl text-gray-500" />
      </div>
      <div className="flex items-center mr-3">
        <span className="font-bold text-2xl text-gray-500">{username}Noel</span>
      </div>
    </div>
  );
};

export default HeaderChat;