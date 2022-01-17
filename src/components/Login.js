import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

export default function Login({ signInWithGoogle }) {
  // const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <div>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </>
  );
}
