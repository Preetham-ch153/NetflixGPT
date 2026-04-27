// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH3LOxdnnWPu_2T7ljPigH84zJyG9QMA4",
  authDomain: "netflixgpt-394a8.firebaseapp.com",
  projectId: "netflixgpt-394a8",
  storageBucket: "netflixgpt-394a8.firebasestorage.app",
  messagingSenderId: "86874892304",
  appId: "1:86874892304:web:5956d41d13f5df35fe8295",
  measurementId: "G-HPMTE7X544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();