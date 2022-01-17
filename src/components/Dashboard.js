import React, { useState, useEffect } from 'react';
import NavComponent from './NavComponent';
import RenderPost from './RenderPost';
import TempRenderPost from './TempRenderPost';

export default function Dashboard() {
  return (
    <>
      <NavComponent />

      <div className="container-fluid">
        <div className="row user-row">
          <RenderPost />
          <TempRenderPost />
        </div>
      </div>
    </>
  );
}
