import React, { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import CreatePost from './CreatePost';
import NavComponent from './NavComponent';
import Login from './Login';

export default function Dashboard({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postToDel = doc(db, 'posts', id);
    await deleteDoc(postToDel);
  };

  return (
    <>
      {/* <NavComponent /> */}

      <div className="container-fluid">
        <div className="row user-row">
          <div className="homePage">
            {postLists.map((post) => {
              return (
                <div className="post">
                  <div className="postHeader">
                    <div className="title">
                      <h1> {post.title}</h1>
                    </div>
                    <div className="deletePost">
                      {isAuth && post.author.id === auth.currentUser.uid && (
                        <button
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        >
                          {' '}
                          &#128465;
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="postTextContainer"> {post.postText} </div>
                  <h3>@{post.author.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
