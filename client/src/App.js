// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'; // Asegúrate de importar Routes

import Login from './components/auth/Login';
import Register from './components/auth/Register';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" Component={Login}/>
      <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
};

export default App;
