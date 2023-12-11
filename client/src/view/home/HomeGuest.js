import React from 'react';
import { Link } from 'react-router-dom';

const HomeGuest = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="max-w-xl p-6 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-4">Bienvenido al chat</h2>
        <p className="text-gray-600 mb-6">
          Conéctate con amigos y descubre lo que está sucediendo en el mundo ahora mismo.
        </p>
        <div className="flex justify-between">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGuest;
