import { loginMe } from "./login.js";
import { registerMe } from "./register.js";


export function welcomePage () {
  
 const welcome =document.createElement('div');
  const welcomeView = `
    <h1>Bienvenida/o</h1>
          
          <button class="login" id="btnLogin" type="submit" >Iniciar Sesión</button>
          
          
          <button class="register" id="btnRegister" type="submit">Registrarse</button>
          
        `
        welcome.innerHTML=welcomeView

 //document.querySelector('.register').//addEventListener('click', registerMe);
 
//document.querySelector('.login').addEventListener('click', loginMe);
let btnLogin = welcome.querySelector('#btnLogin');
btnLogin.addEventListener('click', () => {
  loginMe();
});

  let btnRegister = welcome.querySelector('#btnRegister');
  btnRegister.addEventListener('click', () =>{
    registerMe()
  });

        
return welcome;
};

