import React from 'react';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';

// Lógica para determinar si el usuario está autenticado
const isAuthenticated = true;

const Home = () => {
  return isAuthenticated ? <HomeUser /> : <HomeGuest />;
};

export default Home;
