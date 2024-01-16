import React from 'react';

//imports
import SidebarChat from '../../components/shared/sidebarChat';
import WindowChat from '../../components/chat/windowChat';

const HomeUser = () => {
  console.log("estoy")
  return (
    <div className='flex flex-grow w-screen'>
        <SidebarChat />
        <WindowChat />
    </div>
  );
};

export default HomeUser;
