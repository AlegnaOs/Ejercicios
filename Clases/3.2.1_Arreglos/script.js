let opcion=parseInt(prompt("Ingrese el ejercicio a validar: "));
if(opcion==1){
    alert("1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.");
    let arreglo= [];
    let num;
    for(let i=0;i<11;i++){
        num = Math.floor(Math.random()*100);
        arreglo.push(num);
    }
    alert("los numeros al azar son: ["+arreglo+"]")
}else if(opcion==2){
    alert("2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.");
    const texto1 = prompt("Ingrese varias palabras separadas por coma:");
    const array = texto1.split(",");
    const arrayTexto = array.map(String);
    console.log("Array resultante: ", arrayTexto);
}else if(opcion==3){
    alert("3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.");
    let array = [10, 40, 30, 20, 15, 5];  
    let arrayOrdenado = array.sort((a, b) => a - b);
    alert("Arreglo ordenado de menor a mayor: "+ arrayOrdenado);
    let numeroMenor = Math.min(...array);
    alert("Número menor: "+ numeroMenor);
    let numeroMayor = Math.max(...array);
    alert("Número mayor: "+ numeroMayor);
}else{
    alert("La opcion ingresada no corresponde a ninguno de los 3 ejercicios solicitados.");
}
 