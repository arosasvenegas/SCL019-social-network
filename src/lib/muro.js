import { getAuth,signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app, guardarTask} from "../firebase.js";


export function muroPage() {

    window.location.hash = '#/muro';
  
    const muroV =document.createElement('div');
    
    
    const muroView = `<div class="containerMuro" id="containerMuro">
     <header class="encabezadoMuro" id="encabezadoMuro">
      <img src="/imagenes/logo-lucchi-H.png" id="logoMuro" class="logoMuro">
      <button class="logOut" id="btnLogOut">Cerrar Sesión</button>
     </header>
     <div class="mainPost" id="mainPost">
     <section class="categoryHome" id="categoryHome">
     <button class="categoryFood" id="btnfood"> <i class="fa-solid fa-paw"></i> <br> Alimentacion</button>
     <button class="categoryclean" id="categoryclean"> <i class="fa-solid fa-paw"></i><br> Higine</button>
     <button class="categoryVet" id="categoryVet"> <i class="fa-solid fa-paw"></i> <br>Veterinario</button>
     <button class="categoryGo" id="categoryGo"> <i class="fa-solid fa-paw"></i><br>Paseo</button>
     <button class="categoryPlay" id="categoryPlay"> <i class="fa-solid fa-paw"></i> <br>Juegos</button>
     <button class="categoryAcc" id="categoryAcc"> <i class="fa-solid fa-paw"></i> <br>Accesorios</button>
     </section>

     <section class="containerPost" id="containerPost">

     <form id="task-form">
      <label for="title"> Titulo: </label>
      <input type="text" placeholder="title" id="task-title">

      <label for="title"> Descripción: </label>
      <input type="text" placeholder="descripcion" id="task-description">

      <button id="btnTask"> guardar </button>

      </form>

      <div id="containerTask"></div>

     <div class="post1" id="post1">
     <p>Publicación</p>
     </div>
     <div class="post2" id="post2">
     <p>Publicación</p>
     </div>
     <div class="post3" id="post3">
     <p>Publicación</p>
     </div>
     <div class="post4" id="post4">
     <p>Publicación</p>
     </div>
     </section>
     </div>
      
      <button class="newPost" id="newPost">+</button>
      
      </div>`;
  
     muroV.innerHTML=muroView

     let formulario = muroV.querySelector('#task-form');
     formulario.addEventListener('submit', (e) => {
       e.preventDefault()

       const titulo = formulario["task-title"]
       const descripcion = formulario["task-description"]

       guardarTask(titulo.value , descripcion.value);
       formulario.reset();
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
  

  