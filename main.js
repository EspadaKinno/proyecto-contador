let boton = document.querySelector("#boton");
let panel = document.querySelector(".panel")
let contador = boton.value;

boton.addEventListener("click", () => {
  
  panel.innerHTML = (contador++) + 1;
  if (contador == 10) {
    alert("10 puntos")
  }
})


