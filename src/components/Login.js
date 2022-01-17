import React from 'react';

export default function Login({ signInWithGoogle }) {
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
