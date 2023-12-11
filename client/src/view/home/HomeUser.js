import React from 'react';

//imports
import HeaderChat from '../../components/chat/headerChat';
import SearchChat from '../../components/chat/searchChat';
import ContactChat from '../../components/chat/contactChat';

const HomeUser = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <HeaderChat />
      <SearchChat />
      <ContactChat />
    </div>
  );
};

export default HomeUser;
