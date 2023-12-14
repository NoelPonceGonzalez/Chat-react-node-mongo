// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
//imports components
import Login from './view/auth/Login';
import Register from './view/auth/Register';
import Home from './view/home';
import HomeGuest from './view/home/HomeGuest';
//theme
import ThemeProvider from './theme/themeProvider';
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='' element={<HomeGuest />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
