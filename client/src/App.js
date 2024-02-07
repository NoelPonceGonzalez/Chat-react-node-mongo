import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './view/auth/Login';
import Register from './view/auth/Register';
import HomeGuest from './view/home/HomeGuest';
import HomeUser from './view/home/HomeUser';
import ThemeProvider from './theme/themeProvider';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeGuest />} />
          <Route
            path="/home"
            element={isAuthenticated ? <HomeUser /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;