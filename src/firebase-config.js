import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBW03KwO4CRDeLfLskz21pDOtJFbUPQdO8',
  authDomain: 'sochill-media.firebaseapp.com',
  projectId: 'sochill-media',
  storageBucket: 'sochill-media.appspot.com',
  messagingSenderId: '568168940028',
  appId: '1:568168940028:web:d45d43ba3e44b2c6b4f279',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
