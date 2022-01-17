// import React, { useState, useEffect } from 'react';
// import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
// import { db, auth } from '../firebase-config';
// import { Button, Card } from 'react-bootstrap';
// import blankProfilePic from '../images/blank-profile-pic.png';

// export default function RenderPost({ isAuth }) {
//   const [postLists, setPostList] = useState([]);
//   const postCollectionRef = collection(db, 'posts');

//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await getDocs(postCollectionRef);
//       // console.log(data);
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getPosts();
//   });

//   const deletePost = async (id) => {
//     const postToDel = doc(db, 'posts', id);
//     await deleteDoc(postToDel);
//   };

//   return postLists.map((post) => {
//     return (
//       <div
//         className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 user-form-col"
//         id={post.id}
//       >
//         <Card>
//           <Card.Header className="user-header">
//             <h3>@{post.author.name}</h3>
//             {/* <img src={blankProfilePic} alt="profile pic" /> */}
//           </Card.Header>
//           <Card.Body>{post.postText}</Card.Body>
//         </Card>
//         <div className="deletePost">
//           {isAuth && post.author.id === auth.currentUser.uid && (
//             <button
//               onClick={() => {
//                 deletePost(post.id);
//               }}
//             >
//               {' '}
//               &#128465;
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   });
// }
