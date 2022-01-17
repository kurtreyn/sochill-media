import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import Login from './Login';
import logo from '../images/logo-sochill.png';

export default function LandingPage({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/dashboard');
    });
  };
  return (
    <div className="container-fluid">
      <div className="row custom-row landing-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <h1>soChill Media</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
          <Login setIsAuth={setIsAuth} signInWithGoogle={signInWithGoogle} />
        </div>
      </div>
    </div>
  );
}
