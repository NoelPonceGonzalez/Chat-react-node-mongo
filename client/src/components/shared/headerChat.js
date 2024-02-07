import React, { useState } from 'react';
import { FaUserAlt, FaEllipsisV } from 'react-icons/fa';

import { useTheme } from '../../theme/themeProvider';

import ConfigMenu from '../desplegables/ConfigMenu';
import FriendMenu from '../desplegables/friendMenu';

const HeaderChat = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuFriendOpen, setIsMenuFriendOpen] = useState(false);
  
  const { theme } = useTheme();

  const handleFriendMenu = () => {
    setIsMenuFriendOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const onClose = () => {
    setIsMenuFriendOpen(false);
  }

  return (
    <div className={`flex items-center justify-between w-6/6 h-12 bg-${theme === 'dark' ? 'dark-primary' : 'light-primary'} p-2 border-r border-gray-300 relative`}>
      <div className="flex items-center">
        <FaUserAlt className="text-2xl text-gray-500" onClick={handleFriendMenu} />
      </div>
      <div className="flex items-center mr-3">
        <div className="relative">
          <FaEllipsisV
            className="text-2xl text-gray-500 cursor-pointer"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <ConfigMenu closeMenu={closeMenu} />
          )}
          {isMenuFriendOpen && (
            <FriendMenu onClose={onClose}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderChat;