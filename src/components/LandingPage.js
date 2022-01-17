import logo from '../images/logo-sochill.png';
import React, { useState } from 'react';
import Login from './Login';

export default function LandingPage({ isAuth }) {
  return (
    <div className="container-fluid">
      <div className="row custom-row landing-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <h1>soChill Media</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
          <Login />
        </div>
      </div>
    </div>
  );
}
