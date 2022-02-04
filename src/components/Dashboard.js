import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Navigation from './Navigation';
import RenderPost from './RenderPost';
import CreatePost from './CreatePost';
import EditProfile from './EditProfile';
import avatar from '../images/profile-avatar.png';

export default function Dashboard({
  isAuth,
  setIsAuth,
  currentUser,
  setCurrentUser,
}) {
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <>
      <Navigation
        photoURL={photoURL}
        setPhotoURL={setPhotoURL}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleShow={handleShow}
        // isAuth={isAuth}
        // setIsAuth={setIsAuth}
      />
      <div className="container-fluid">
        <div className="row user-row">
          <CreatePost
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            photoURL={photoURL}
            currentUser={currentUser}
          />
        </div>
        <div className="row feed-row">
          <RenderPost currentUser={currentUser} photoURL={photoURL} />
        </div>
      </div>
      <Modal className="modal-window" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfile
            currentUser={currentUser}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={createPost}>
              Post
            </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
