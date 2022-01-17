import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import TempDashboard from './TempDashboard';
import TempCreatePost from './TempCreatePost';
import Navigation from './Navigation';
import Login from './Login';

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
          element={<TempDashboard isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route exact path="/createpost" element={<TempCreatePost />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

// https://youtu.be/zL0dKETbCNE?t=1130
