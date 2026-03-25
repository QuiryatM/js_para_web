console.log("Aquí estoy de verdad que si estoy");

const boton = document.getElementById("btnCalcular");

const nombre = document.getElementById("nombreUsuario").value;

const htmlMarcado = document.getElementById("html").checked;

document.getElementById("resultado").style.display="block"

boton.addEventListener("click", function(){
    console.log("Click en el botón");
})