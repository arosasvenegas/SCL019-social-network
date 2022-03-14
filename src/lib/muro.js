import { getAuth,signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from "../Firebase.js";

export function muroPage() {

    window.location.hash = '#/muro';
  
    const muroV =document.createElement('div');
    
    
    const muroView = `<div class="containerMuro" id="containerMuro">

     <h1>HELLO THERE<h1>
      <p> general kenobi </p> 
     
      <button class="logOut" id="btnLogOut">cerrar sesión</button>
      </div>`;
  
     muroV.innerHTML=muroView

  
    let btnSalirV = muroV.querySelector('#btnLogOut');
    btnSalirV.addEventListener('click', () => {
      logOut();
    });
    
  
  return muroV;
  };



  const auth = getAuth(app);
  // cerrar sesion
function logOut() {
    signOut(auth).then(() => {
      alert("Usted esta cerrando sesion");
      window.location.hash = '#/welcome';
    }).catch((error) => {
    
    });
  };
  

  