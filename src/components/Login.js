import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  function changeAuth() {
    setIsAuth(true);
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      changeAuth();
      navigate('/dashboard');
    });
  };

  return (
    <>
      {/* <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button> */}
      <Link></Link>
    </>
  );
}
