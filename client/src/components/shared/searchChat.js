import React from 'react';
import { useTheme } from '../../theme/themeProvider';

const SearchChat = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center justify-between w-6/6 h-12 ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'} p-2 border-r border-gray-300`}>
      <div className="flex items-center mx-auto">
        <input 
          className={`rounded w-full text-${theme === 'dark' ? 'light' : 'dark'} placeholder-${theme === 'dark' ? 'light' : 'dark'} text-center outline-none`}
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchChat;
