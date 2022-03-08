// Este es el punto de entrada de tu aplicacion
// import { myFunction} from './lib/index.js';
//import {registerMe} from './lib/register.js';
//import {loginMe} from './lib/login.js';

//  myFunction();

//document.getElementById('inicioRegister').addEventListener('click', registerMe);
 
//document.getElementById('inicioLogin').addEventListener('click', loginMe);
 
import { welcomePage } from "./lib/welcome.js";
import { router } from "./lib/router.js";
const loadview =()=>{
  document.getElementById('root').appendChild(welcomePage());
  //window.location.hash = '/welcome';
  window.addEventListener('hashchange', () =>{
      
   
    router(window.location.hash);
   });}
 

 window.addEventListener('load', loadview() );



