// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Login from './view/auth/Login';
import Register from './view/auth/Register';
import HomeGuest from './view/home/HomeGuest';
import HomeUser from './view/home/HomeUser';
import ThemeProvider from './theme/themeProvider';

import { verifyToken } from './routes/serverRoutes/userRegistrationRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      await verifyToken(setIsAuthenticated);
    };

    checkAuthentication();
  }, []); 

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='' element={<HomeGuest />} />
          <Route path='/home' element={isAuthenticated ? <HomeUser /> : <Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
