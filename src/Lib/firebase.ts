// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuZmzvq-rfexB8KKqiww9drLG4JDJo2MM",
  authDomain: "mobdev1-studenttodo.firebaseapp.com",
  projectId: "mobdev1-studenttodo",
  storageBucket: "mobdev1-studenttodo.appspot.com",
  messagingSenderId: "410182200922",
  appId: "1:410182200922:web:31789905320f1b2ddb7263"
};

const initFirebase = () => {
    initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// // Initialize Firestore
const db = getFirestore();

// Initialize Firebase
export { db, initFirebase };