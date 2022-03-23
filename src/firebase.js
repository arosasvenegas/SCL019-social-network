import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {getFirestore,collection,addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc, arrayRemove, arrayUnion } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";


export const firebaseConfig = {
    apiKey: "AIzaSyDXN7gn69XolJlFkcHABqy-sqopSIZi4cY",
    authDomain: "red-social-laboratoria-9d792.firebaseapp.com",
    projectId: "red-social-laboratoria-9d792",
    storageBucket: "red-social-laboratoria-9d792.appspot.com",
    messagingSenderId: "962213223823",
    appId: "1:962213223823:web:5811bd187a217546003ffa"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  const auth = getAuth();
  
  export const guardarTask= (titulo, descripcion) => {
    const docRef = addDoc(collection(db,"publicaciones"),{
      titulo:titulo,
      descripcion:descripcion,
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      userId: auth.currentUser.uid,
      like: [],
      likeCounter: 0,
      date: Date(Date.now()),


    });
    
    return docRef
  };

    export const mostrarTask = () => getDocs(collection(db, 'publicaciones'));

    export const deletePost = (id) => deleteDoc(doc(db, "publicaciones", id));

    export const editPost = (id) => getDoc(doc(db, "publicaciones", id));

    export const updatePost = (id, newFields) => updateDoc(doc(db, "publicaciones", id), newFields);

   

  //const likePost = () => updateDoc(doc(db, "publicaciones"))


   