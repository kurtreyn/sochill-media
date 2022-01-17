import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import blankProfilePic from '../images/blank-profile-pic.png';

export default function CreatePost({ isAuth }) {
  const [postText, setPostText] = useState('');

  function updateText(e) {
    setPostText(e.target.value.trim());
    // console.log(postText);
    console.log(`isAuth is: ${isAuth}`);
  }

  const postCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/dashboard');
  };

  //   useEffect(() => {
  //     if (!isAuth) {
  //       navigate('/');
  //     }
  //   }, []);

  return (
    <>
      <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 user-form-col">
        <Card>
          <Card.Header className="user-header">
            <h3>User Name</h3>
            <img src={blankProfilePic} alt="profile pic" />
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group id="post">
                <Form.Control
                  type="post"
                  placeholder="make a post"
                  onChange={updateText}
                />
              </Form.Group>

              <Button className="mt-2" type="submit" onClick={createPost}>
                post
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
