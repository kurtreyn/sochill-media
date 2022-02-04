import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Signup from './Signup';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

export default function Main() {
  const currentUser = useAuth();

  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return unsub;
    }, []);

    return currentUser;
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage currentUser={currentUser} />}
        />

        <Route
          exact
          path="/dashboard"
          element={<Dashboard currentUser={currentUser} />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
