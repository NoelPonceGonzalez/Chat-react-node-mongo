import React, { useState } from 'react';
import { FaUserAlt, FaEllipsisV } from 'react-icons/fa';

import { useTheme } from '../../theme/themeProvider';

const HeaderChat = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = () => {
    toggleTheme();
    setMenuOpen(false);
    console.log('Cambiar Tema: ', theme);
  };

  const handleLogout = () => {
    console.log('Cerrar Sesión');
  };

  return (
    <div className={`flex items-center justify-between w-6/6 h-12 bg-${theme === 'dark' ? 'dark-primary' : 'light-primary'} p-2 border-r border-gray-300 relative`}>
      <div className="flex items-center">
        <FaUserAlt className="text-2xl text-gray-500" />
      </div>
      <div className="flex items-center mr-3">
        <div className="relative">
          <FaEllipsisV
            className="text-2xl text-gray-500 cursor-pointer"
            onClick={handleMenuClick}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2">
              <button onClick={handleThemeChange} className='hover:bg-blue-200'>Cambiar Tema</button>
              <button onClick={handleLogout} className='hover:bg-red-200'>Cerrar Sesión</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderChat;
