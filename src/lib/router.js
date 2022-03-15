import{welcomePage} from './welcome.js';
import { loginMe } from './login.js';
import {registerMe} from "./register.js";
import { muroPage } from "./muro.js";
import { food } from './alimento.js';


export const router = (hash) =>{

   const root = document.getElementById('root');
   root.innerHTML = "";
   if (hash === "#/welcome" || hash === "#" || hash === ""){

    root.appendChild(welcomePage());
   } else if (window.location.hash === '#/welcome'){
           root.appendChild(welcomePage());
        } else if (window.location.hash === '#/login'){
            root.appendChild(loginMe());
        } else if (window.location.hash === '#/register'){
            root.appendChild(registerMe());
        } else if (window.location.hash === '#/muro') {
            root.appendChild(muroPage());    
        }else if (window.location.hash ==='#/alimentacion'){
            root.appendChild(food());
        }
}