import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import blankProfilePic from '../images/blank-profile-pic.png';

export default function TempRenderPost() {
  return (
    <div
      className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 user-form-col"
      id="post-title"
    >
      <Card>
        <Card.Header className="user-header">
          <h3>@Kurt Reynolds</h3>
          {/* <img src={blankProfilePic} alt="profile pic" /> */}
        </Card.Header>
        <Card.Body>
          post text post text post text post text post text post text post text
          post text post text post text post text post text
        </Card.Body>
        <Card.Footer className="text-muted">Delete Post</Card.Footer>
      </Card>
    </div>
  );
}
