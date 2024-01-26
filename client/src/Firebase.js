// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-82025.firebaseapp.com",
  projectId: "blog-mern-82025",
  storageBucket: "blog-mern-82025.appspot.com",
  messagingSenderId: "704157240447",
  appId: "1:704157240447:web:70e784ffa46e1e59d1c34a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
