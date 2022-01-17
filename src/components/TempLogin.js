import React from 'react';
import { HashRouter, BrowserRouter, Link } from 'react-router-dom';

export default function TempLogin() {
  return (
    <>
      <div>TEMP Login Component</div>
      <div>
        <Link to="/dashboard">LOGIN </Link>
      </div>
    </>
  );
}
