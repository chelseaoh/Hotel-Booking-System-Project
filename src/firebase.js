// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0xspAvSbvo0tcpGSU3_fiHxn-IOlRY-A",
  authDomain: "cabelle-6c998.firebaseapp.com",
  projectId: "cabelle-6c998",
  storageBucket: "cabelle-6c998.appspot.com",
  messagingSenderId: "825339706675",
  appId: "1:825339706675:web:d0b09b7de506d9cfccd246",
  measurementId: "G-41SJDXHNZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);