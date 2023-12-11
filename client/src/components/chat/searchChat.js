import React from 'react';

const SearchChat = () => {
  return (
    <div className="flex items-center justify-between w-1/6 h-12 bg-gray-200 p-2 border-r border-gray-300">
      <div className="flex items-center mx-auto">
        <input 
          className='rounded w-full text-gray-500 placeholder-gray-500 text-center outline-none'
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchChat;
