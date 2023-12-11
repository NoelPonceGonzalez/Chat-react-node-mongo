// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Login from './view/auth/Login';
import Register from './view/auth/Register';
import Home from './view/home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path="/login" Component={Login}/>
      <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
};

export default App;
