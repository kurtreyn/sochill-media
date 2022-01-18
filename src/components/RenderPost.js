import React, { useState, useEffect } from 'react';
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { Button, Card } from 'react-bootstrap';
import blankProfilePic from '../images/blank-profile-pic.png';

// const useFetch = (url) => {
//   const [postLists, setPostList] = useState([]);
//   const postCollectionRef = collection(db, 'posts');

//   useEffect(() => {
//     if (!postLists) {
//       const getPosts = async () => {
//         const data = await getDocs(url);
//         setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       };
//       getPosts();
//     }
//   }, [postLists]);
// };

export default function RenderPost({ isAuth }) {
  const postCollectionRef = collection(db, 'posts');
  // const { postLists } = useFetch(postCollectionRef);
  const [postLists, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postLists]);

  const deletePost = async (id) => {
    const postToDel = doc(db, 'posts', id);
    await deleteDoc(postToDel);
  };

  return postLists.map((post) => {
    return (
      <div
        className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 user-form-col"
        key={post.id}
      >
        <Card>
          <Card.Header className="user-header">
            <h3>@{post.author.name}</h3>
            {/* <img src={blankProfilePic} alt="profile pic" /> */}
          </Card.Header>
          <Card.Body>{post.postText}</Card.Body>
          {isAuth && post.author.id === auth.currentUser.uid && (
            <Card.Footer
              className="text-muted"
              onClick={() => {
                deletePost(post.id);
              }}
            >
              {' '}
              Delete Post
            </Card.Footer>
          )}
        </Card>
      </div>
    );
  });
}
