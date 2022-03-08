import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from "../Firebase.js";
import { registerGoogle } from "../lib/register.js";

// // ___________________REGISTRARSE___________________
// Función que muestra formulario de registro
export function loginMe() {
    window.location.hash = '/login';
  
   const root = document.getElementById('root');
    root.innerHTML = `<h4>Iniciar sesión</h4>
      <input id="email" type="email" placeholder="Ingresa tu Email">
      <input id="password" type="password" placeholder="Ingresa tu contraseña">
      <button id="btnLogin">iniciar sesión</button>
      <button id="btnGoogleLogin"> Usar cuenta de google Google</button>`;
  
    document.getElementById('btnLogin').addEventListener('click', login);
    document.getElementById('btnGoogleLogin').addEventListener('click', registerGoogle);
  }
  


const auth = getAuth(app);


export function login() {
    let emailLogin = document.getElementById('email').value;
    let passwordLogin = document.getElementById('password').value;

signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  });
}