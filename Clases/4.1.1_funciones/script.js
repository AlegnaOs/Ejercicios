// // El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// // Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// // Se debe respetar el orden de los colores:
// // De rojo pasa a Verde.
// // De amarillo puede pasar a Rojo.
// // De Verde pasa a Amarillo.

function verde() {
  console.log("Hola");
  document.write("<img src='img/verde.webp'>");
  document.write("<img src='img/amarillo.webp'>");
}
function detente(intervalo) {
  document.write("<img src='img/rojo.webp'>");
  clearInterval(intervalo);
  console.log("Listo!");
}
function ocultar(){
    
}
var intervalo = setInterval(verde(), 10000);
setTimeout(detente(intervalo), 20000);
