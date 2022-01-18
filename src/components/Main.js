import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CreatePost from './CreatePost';
import Dashboard from './Dashboard';

export default function Main() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage isAuth={isAuth} setIsAuth={setIsAuth} />}
        />

        <Route
          exact
          path="/dashboard"
          element={<Dashboard isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
      </Routes>
    </div>
  );
}
