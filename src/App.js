import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import LandingPage from './components/LandingPage';
import NavComponent from './components/NavComponent';
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import Login from './components/Login';

import Main from './components/Main';

function App() {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname = '/login';
  //   });
  // };

  return (
    <HashRouter>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <>
          <Link to="/createpost"> Create Post </Link>
        </>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
