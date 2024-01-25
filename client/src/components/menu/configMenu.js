import React from "react";

import closeSession from "../../routes/navigationRoutes/closeSession";
import { useTheme } from "../../theme/themeProvider";

const ConfigMenu = ({ closeMenu }) => {
  const { toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
    closeMenu();
  };

  return (
    <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2">
      <button onClick={handleThemeChange} className='hover:bg-blue-200'>Cambiar Tema</button>
      <button onClick={() => closeSession()} className='hover:bg-red-200'>Cerrar Sesión</button>
    </div>
  );
};

export default ConfigMenu;