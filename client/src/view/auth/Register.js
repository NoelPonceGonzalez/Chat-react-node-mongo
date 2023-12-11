import React, { useState } from 'react';
import useHandleNavigation from '../../routes/views/AuthRoutes';

const Register = () => {
  const handleNavigation = useHandleNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}, Mode: Register`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to right, #e2fdfc, #cfd9df)',
      }}
    >
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-green-300"
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
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-green-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-300 ease-in-out w-full"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-gray-600">Already have an account?</span>
          <button
            onClick={() => handleNavigation('login')}
            className="text-blue-500 ml-1 hover:underline focus:outline-none"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
