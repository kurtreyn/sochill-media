import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { Button, Card } from 'react-bootstrap';

export default function RenderPost({ currentUser, photoURL, isAuth }) {
  const postCollectionRef = collection(db, 'posts');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(postCollectionRef, (snapshot) => {
      if (loading) {
        const results = snapshot.docs.map((doc) => {
          return { ...doc.data(), key: doc.id };
        });
        setPosts(results);
      }
    });

    return () => {
      loading = false;
    };
  }, []);

  console.log(posts);

  const deletePost = async (key) => {
    const postToDel = doc(db, 'posts', key);
    await deleteDoc(postToDel);
  };

  return posts.map((post) => {
    return (
      <div
        className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 feed-col"
        key={post.id}
      >
        <Card>
          <Card.Header className="feed-header">
            <img src={post.photoURL} alt="profile pic" />
            <h4>{post.author.name}</h4>
          </Card.Header>
          <Card.Body>{post.postText}</Card.Body>

          <Card.Footer>{post.postDate}</Card.Footer>
        </Card>
      </div>
    );
  });
}
