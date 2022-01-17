import React, { useState } from 'react';
import TempNav from './TempNav';
import TempRenderPost from './TempRenderPost';

export default function TempDashboard() {
  return (
    <>
      <TempNav />
      <div className="container-fluid">
        <div className="row user-row">
          {/* <RenderPost /> */}
          <TempRenderPost />
        </div>
      </div>
    </>
  );
}
