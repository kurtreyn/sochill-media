import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import blankProfilePic from '../images/blank-profile-pic.png';

export default function TempRenderPost({ isAuth }) {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 user-form-col">
      <Card>
        <Card.Header className="user-header">
          <h3>@Kurt Reynolds</h3>
          <img src={blankProfilePic} alt="profile pic" />
          <div className="deletePost">
            <button className="btnDelPost">&#128465;</button>
          </div>
        </Card.Header>
        <Card.Body>
          Post text. Text text text text text text text text text text text text
          text text text text text text text{' '}
        </Card.Body>
      </Card>
    </div>
  );
}
