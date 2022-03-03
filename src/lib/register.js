

//REGISTRO DE USARIO 

let email= document.getElementById("email").value;
let password = document.getElementById("paswword").value;
let username= document.getElementById("userName").value;

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    alert("user created");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage + errorCode);
    // ..
  });


//   const buttonRegistrarse = document.getElementById("buttonRegistro");
// buttonRegistrarse.addEventListener("click", function registrarse() {});