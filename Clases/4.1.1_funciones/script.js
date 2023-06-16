let colors = ["amarillo","verde","rojo"];
const ColorSemaforo = document.querySelector("#Imagen-Color");

function semaforoLuz() {
  const color = colors.pop();
  if (!colors.length) 
  colors = ["amarillo","verde","rojo"];
  ColorSemaforo.src = "img/" + color + ".webp";
  return color;
}
const intervalID = setInterval(semaforoLuz, 1500);
