import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from "../Firebase.js";
import { registerGoogle } from "../lib/register.js";

// // ___________________REGISTRARSE___________________
// Función que muestra formulario de registro
export function loginMe() {
    window.location.hash = '#/login';
  
   const root = document.getElementById('root');
    root.innerHTML = ` <div class="containerLogin" id="containerLogin"> 
      
    <img src="/imagenes/logo-lucchi.png" id="logoLogin">
    <label class="labelLoginMe">Ingresa tu Email</label>
    <input class="inputLoginMe" id="email" type="email">

    <label class="labelLoginMe">Ingresa tu contraseña</label>
    <input class="inputLoginMe" id="password" type="password"><br>
    <p class="mensajeError" style="color:black;""> </p>
   
    <button class="buttonLoginMe" id="btnLogin">Iniciar sesión</button>
    <p class="txtGoogle">O iniciar sesión con</p> 
    <button class="buttonLoginGoogle" id="btnGoogleLogin">  Google</button>

      </div>
      `;
  
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
      root.querySelector(".mensajeError").innerHTML = '';
     
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
    root.querySelector(".mensajeError").innerHTML = errorMessage;
    console.log(errorCode); 
  });
}