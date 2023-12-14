import React from "react";
//imports components
import HeaderChat from "./headerChat";
import SearchChat from "./searchChat";
import ContactChat from "./contactChat";

const SidebarChat = () => {
    return (
    <div className='flex flex-col h-screen w-60 overflow-hidden'>
        <HeaderChat />
        <SearchChat />
        <ContactChat />
    </div>
    )
}

export default SidebarChat;