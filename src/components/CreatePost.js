import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import blankProfilePic from '../images/blank-profile-pic.png';

export default function CreatePost({ photoURL, currentUser }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [postText, setPostText] = useState('');

  let postDate = new Date();
  let dd = String(postDate.getDate()).padStart(2, '0');
  let mm = String(postDate.getMonth() + 1).padStart(2, '0');
  let yyyy = postDate.getFullYear();

  postDate = mm + '/' + dd + '/' + yyyy;
  // document.write(today);

  function updateText(e) {
    setPostText(e.target.value.trim());
  }

  const postCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      photoURL: photoURL,
      postText: postText,
      author: {
        name: currentUser.email,
        id: auth.currentUser.uid,
      },
      postDate: postDate,
    });
    // console.log(currentUser.email);
    // console.log(auth.currentUser.uid);

    handleClose();
    navigate('/dashboard');
  };

  return (
    <>
      <div className="row modal-row">
        <Button
          variant="primary"
          className="btn-create-post"
          onClick={handleShow}
        >
          Create Post
        </Button>

        <Modal className="modal-window" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{postCollectionRef.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group id="post">
                <Form.Control
                  type="post"
                  placeholder="make a post"
                  onChange={updateText}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={createPost}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
