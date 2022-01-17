import React from 'react';
import { HashRouter, BrowserRouter, Link } from 'react-router-dom';

export default function TempLogin() {
  return (
    <>
      <div>TEMP Login Component</div>
      <div>
        <Link to="/dashboard">
          <button className="login-with-google-btn">Sign in with Google</button>
        </Link>
      </div>
    </>
  );
}
