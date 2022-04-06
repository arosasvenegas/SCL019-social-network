
import { router } from "./lib/router.js";
import {observer} from './lib/login.js';


window.addEventListener('load', () => {
router(window.location.hash);
observer()
});


  window.location.hash = '#/welcome';
  window.addEventListener('hashchange', () =>{
    router(window.location.hash);
    observer()
  });
  
      
