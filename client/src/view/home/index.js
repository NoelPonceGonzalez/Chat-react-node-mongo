import React from 'react';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';
import { useEffect, useState } from 'react';
// Lógica para determinar si el usuario está autenticado
import axios from 'axios';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Realizar una solicitud al servidor para verificar el token
    axios.get('/verify-token')
      .then(response => {
        // Si la respuesta es exitosa, el token es válido
        setIsAuthenticated(true);
      })
      .catch(error => {
        // Si hay un error, el token no es válido o no existe
        setIsAuthenticated(false);
      });
  }, []);

  return isAuthenticated ? <HomeUser /> : <HomeGuest />;
};
export default Home;
