import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
//import {getFirestore} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyDXN7gn69XolJlFkcHABqy-sqopSIZi4cY",
    authDomain: "red-social-laboratoria-9d792.firebaseapp.com",
    projectId: "red-social-laboratoria-9d792",
    storageBucket: "red-social-laboratoria-9d792.appspot.com",
    messagingSenderId: "962213223823",
    appId: "1:962213223823:web:5811bd187a217546003ffa"
  };
  
  export const app = initializeApp(firebaseConfig);
  
  //export const db = getFirestore(app);
  