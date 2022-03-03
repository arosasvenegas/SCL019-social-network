// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';

//myFunction();

let root = document.getElementById("root");


let titleRegister = document.createElement("h1");
titleRegister.textContent = "Register";
root.appendChild(titleRegister);

let formRegister = document.createElement("form");
formRegister.setAttribute("class", "register");
root.appendChild(formRegister);

let userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("placeHolder", "User Name");
userName.setAttribute("id", "userName");
userName.setAttribute("class", "input");
formRegister.appendChild(userName);

let email = document.createElement("input");
email.setAttribute("type", " email");
email.setAttribute("placeHolder", "Ejemplo@correo.com");
email.setAttribute("id", "email");
email.setAttribute("class", "input");
formRegister.appendChild(email);

let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("placeHolder", "Password");
password.setAttribute("id", "paswword");
password.setAttribute("class", "input");
formRegister.appendChild(password);

let buttonRegister = document.createElement("input");
buttonRegister.setAttribute("type", "submit");
buttonRegister.setAttribute("value", "Registrarse");
buttonRegister.setAttribute("class", "buttonSubmit");
formRegister.appendChild(buttonRegister);

let buttonGoogle = document.createElement("input");
buttonGoogle.setAttribute("type", "submit");
buttonGoogle.setAttribute("value", "Google");
buttonGoogle.setAttribute("class", "buttonSubmit");
formRegister.appendChild(buttonGoogle);




