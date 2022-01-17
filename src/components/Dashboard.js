import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import RenderPost from './RenderPost';

export default function TempDashboard({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/');
    });
  };
  return (
    <>
      <Navigation
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        signUserOut={signUserOut}
      />
      <div className="container-fluid">
        <div className="row user-row">
          <RenderPost />
        </div>
      </div>
    </>
  );
}
