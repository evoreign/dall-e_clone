// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnw4DveQ1IPIhl8OzDcILkj6FwUdhTJSw",
  authDomain: "dall-e-clone-acd01.firebaseapp.com",
  projectId: "dall-e-clone-acd01",
  storageBucket: "dall-e-clone-acd01.appspot.com",
  messagingSenderId: "229812049756",
  appId: "1:229812049756:web:3861c8b43ed5a3814f5399",
  measurementId: "G-JJPGDS6EV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);