import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import RenderPost from './RenderPost';
import CreatePostOLD from './CreatePostOLD';
import TempRenderPost from './TempRenderPost';
import CreatePost from './CreatePost';

export default function Dashboard({ isAuth, setIsAuth }) {
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
        </div>
        <div className="feed-row">
          <div className="feed-col">
            <RenderPost />
          </div>
        </div>
      </div>
    </>
  );
}
