import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { useState } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
// import { signOut } from 'firebase/auth';
// import { auth } from './firebase-config';
// import LandingPage from './components/LandingPage';
// import NavComponent from './components/NavComponent';
// import Dashboard from './components/Dashboard';
// import CreatePost from './components/CreatePost';
// import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
