
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase/auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDXN7gn69XolJlFkcHABqy-sqopSIZi4cY",
  authDomain: "red-social-laboratoria-9d792.firebaseapp.com",
  projectId: "red-social-laboratoria-9d792",
  storageBucket: "red-social-laboratoria-9d792.appspot.com",
  messagingSenderId: "962213223823",
  appId: "1:962213223823:web:5811bd187a217546003ffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth= getAuth()

