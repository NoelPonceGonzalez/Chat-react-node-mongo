import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "../../theme/themeProvider";
import { addFriends } from "../../routes/serverRoutes/routeFriends";

const FriendMenu = ({ onClose }) => {
  const friendMenuRef = useRef(null);
  const {theme} = useTheme();
  const [friend, setFriend] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addFriends(friend);
      onClose(); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (friendMenuRef.current && !friendMenuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={friendMenuRef} className={`bg-${theme === 'dark' ? 'dark-primary' : 'light-primary'} fixed transform ml-11 mt-4 h-10 bg-opacity-80 p-8 shadow-md`}>
        <input
          className={`bg-${theme === 'dark' ? 'dark-primary' : 'light-primary'} ${theme === 'dark' ? 'text-white' : 'text-black'} rounded focus:outline-none`}
          placeholder="Add New Friend"
          value={friend}
          onChange={(e) => setFriend(e.target.value)}
          onKeyDown={handleKeyDown}
        />
    </div>
  );
};

export default FriendMenu;
