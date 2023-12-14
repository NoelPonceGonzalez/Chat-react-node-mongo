import React from "react";
import { useTheme } from "../../theme/themeProvider";

const ChatHeaderContact = () => {
    const { theme } = useTheme();
    return (
        <div className={`flex items-center justify-between h-12 ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'}`}>

        </div>
    )
}

export default ChatHeaderContact;