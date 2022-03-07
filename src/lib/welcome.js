import { loginMe } from "./login";

window.onload = welcomePage
export function welcomePage () {
  window.location.hash = '/welcome';
  const root = document.getElementById('root')
  root.innerHTML = `
    <h1>Bienvenida/o</h1>
          <a href="/login">
          <button class="login" id="btnLogin" type="submit" >Iniciar Sesión</button>
          </a>
          <a href="/register">
          <button class="register" id="btnregister" type="submit">Registrarse</button>
          </a>
        `

        const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () =>{
  loginMe();
  console.log("esta en el login")
});

};