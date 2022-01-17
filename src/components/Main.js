import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import TempDashboard from './TempDashboard';
import TempLogin from './TempLogin';
import TempCreatePost from './TempCreatePost';

export default function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/dashboard" element={<TempDashboard />} />
        <Route exact path="/createpost" element={<TempCreatePost />} />
        {/* <Route exact path="/createpost" element={<CreatePost />} /> */}
        <Route path="/login" element={<TempLogin />} />
      </Routes>
    </div>
  );
}
