// --------------------Punto 1-----------------
// let bello = prompt("¿Eres bellisimo/a?");
// let ser = bello.toLowerCase();
// if(ser=="si")
// {
//     alert("Ciertamente");
// }else if (ser =="no"){
//     alert("No te creo");
// }else{
//     alert("El valor ingresado no corresponde a una respuesta esperada.");
// }
// --------------------Punto 2-----------------
// let num=parseInt(prompt("Ingrese un numero"));
// mod = num % 2;
// if(mod===0){
//     alert(num + " es un número divisible entre 2");
// }else if(mod>0){
// alert(num + " no es un número divisible entre 2")
// }else{
//     alert("El valor ingresado no es valido")
// }
// --------------------Punto 3-----------------
let num=parseInt(prompt("Ingrese un numero"));
par = num % 2;
if(par===0){
    alert(num + " es un número par");
}else if(par>0){
alert(num + " es un número impar")
}else{
    alert("El valor ingresado no es valido")
}