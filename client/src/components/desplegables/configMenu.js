import React from "react";

import closeSession from "../../routes/navigationRoutes/closeSession";
import { useTheme } from "../../theme/themeProvider";

import { useAuth } from "../../context/AuthContext";

const ConfigMenu = ({ closeMenu }) => {
  const { toggleTheme } = useTheme();
  const { setIsAuthenticated } = useAuth();

  const handleThemeChange = () => {
    toggleTheme();
    closeMenu();
  };
  
  const hanldeCloseSession = () => {
    closeSession(setIsAuthenticated)
  }

  return (
    <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2">
      <button onClick={handleThemeChange} className='hover:bg-blue-200'>Cambiar Tema</button>
      <button onClick={hanldeCloseSession} className='hover:bg-red-200'>Cerrar Sesión</button>
    </div>
  );
};

export default ConfigMenu;