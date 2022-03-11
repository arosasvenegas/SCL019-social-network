
import {registerMe} from './lib/register.js';
import {loginMe} from './lib/login.js';
import { welcomePage } from "./lib/welcome.js";
import { router } from "./lib/router.js";



window.addEventListener('load', () => {
router(window.location.hash);
});


  window.location.hash = '#/welcome';
  window.addEventListener('hashchange', () =>{
    router(window.location.hash);
  });
      
