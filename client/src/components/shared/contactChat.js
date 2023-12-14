import React from 'react';
import { useTheme } from '../../theme/themeProvider';

const ContactChat = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-between w-6/6 h-screen ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'} p-2 border-r border-gray-300 border-l border-t overflow-y-auto`}>
      
    </div>
  );
};

export default ContactChat;
