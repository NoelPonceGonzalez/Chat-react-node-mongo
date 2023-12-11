import React, { useState } from 'react';
import useHandleNavigation from '../../routes/views/AuthRoutes';

const Login = () => {
  const handleNavigation = useHandleNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}, Mode: Login`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to right, #ff9a9e, #fecfef)',
      }}
    >
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out w-full"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <button
            onClick={() => handleNavigation('register')}
            className="text-blue-500 ml-1 hover:underline focus:outline-none"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
