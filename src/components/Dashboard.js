import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import RenderPost from './RenderPost';
import CreatePost from './CreatePost';

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
          <CreatePost isAuth={isAuth} setIsAuth={setIsAuth} />
          <RenderPost />
        </div>
      </div>
    </>
  );
}
