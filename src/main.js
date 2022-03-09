
import {registerMe} from './lib/register.js';
import {loginMe} from './lib/login.js';
import { welcomePage } from "./lib/welcome.js";
import { router } from "./lib/router.js";



const loadview =()=>{
  document.getElementById('root').appendChild(welcomePage());
  window.location.hash = '/welcome';
  window.addEventListener('hashchange', () =>{
      
    router(window.location.hash);
   });}
 

 window.addEventListener('load', loadview() );


 document.getElementById('btnRegister').addEventListener('click', registerMe);
 document.getElementById('btnLogin').addEventListener('click', loginMe);

