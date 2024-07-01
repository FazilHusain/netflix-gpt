// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvFJQ3baz5vUCbxAD6Z9iQnlnEoXDUbqc",
  authDomain: "netflixgpt-313a8.firebaseapp.com",
  projectId: "netflixgpt-313a8",
  storageBucket: "netflixgpt-313a8.appspot.com",
  messagingSenderId: "754902651565",
  appId: "1:754902651565:web:a96533b07d3310d842ec24",
  measurementId: "G-T0FCB2N1DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();