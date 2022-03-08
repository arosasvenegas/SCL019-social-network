import{welcomePage} from './welcome.js';
import { loginMe } from './login.js';
import {registerMe} from "./register.js";


export function router (){

   const root = document.getElementById('root');
   root.innerHTML = '';
  
        if (window.location.hash === '/welcome'){
           root.appendChild(welcomePage());
        }
        if (window.location.hash === '/login'){
            root.appendChild(loginMe());
        }
        if (window.location.hash === '/register'){
            root.appendChild(registerMe());
        }
    
}