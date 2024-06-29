// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0V8qJvivehno4jB8CfJ4c6KI56dqxG_s",
  authDomain: "aidoc-cf950.firebaseapp.com",
  projectId: "aidoc-cf950",
  storageBucket: "aidoc-cf950.appspot.com",
  messagingSenderId: "54395839993",
  appId: "1:54395839993:web:d0e392f636730068004928",
  measurementId: "G-J8JQL0MQTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth(app);


export { app, auth };