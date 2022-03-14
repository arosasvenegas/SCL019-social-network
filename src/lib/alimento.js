export function food(){
    window.location.hash='#/alimentacion';
    const foodV = document.createElement('div');

    const foodView = `<div class="containerFood" id="containerFood">
    <header class="encabezadoMuro" id="encabezadoMuro">
      <img src="/imagenes/logo-lucchi.png" id="logoMuro" class="logoMuro">
     </header>
    
    
    </div>`;

     foodV.innerHTML=foodView

    return foodV;
};