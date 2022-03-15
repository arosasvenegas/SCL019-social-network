import { getAuth,signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from "../Firebase.js";
import { food } from './alimento.js';

export function muroPage() {

    window.location.hash = '#/muro';
  
    const muroV =document.createElement('div');
    
    
    const muroView = `<div class="containerMuro" id="containerMuro">
     <header class="encabezadoMuro" id="encabezadoMuro">
      <img src="/imagenes/logo-lucchi.png" id="logoMuro" class="logoMuro">
     </header>

     <section class="categoryHome" id="categoryHome">
     <button class="categoryFood" id="btnfood">Alimentacion</button>
     <button class="categoryclean" id="categoryclean">Higine</button>
     <button class="categoryVet" id="categoryVet">Veterinario</button>
     <button class="categoryGo" id="categoryGo">Paseo</button>
     <button class="categoryPlay" id="categoryPlay">Juegos</button>
     <button class="categoryAcc" id="categoryAcc">Accesorios</button>
     </section>

      
      <button class="logOut" id="btnLogOut">cerrar sesión</button>
      
      </div>`;
  
     muroV.innerHTML=muroView


    let btnComida = muroV.querySelector('#btnfood');
    btnComida.addEventListener('click', () => {
         food();
      });
  
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
      alert("Usted esta cerrando sesión, tome awita ✌🏻");
      window.location.hash = '#/welcome';
    }).catch((error) => {
    
    });
  };
  

  