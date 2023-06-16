let opcion=parseInt(prompt("Ingrese el ejercicio a validar: "));
if(opcion==1){
    alert("1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.");
    let numero=parseInt(prompt("Ingrese un numero"));
    let numTemporal;
    let multiplos = [];
    let n=1;
    while(n<=numero){
        numTemporal = n % 5;
        if(numTemporal == 0){
            multiplos.push(n);
        }
        n++;
    }
alert("Los multiplos de "+numero+" son ["+ multiplos + "]");
}else if(opcion==2){
    alert("2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.");
    let num1=parseInt(prompt("Ingrese el primer numero: "));
    let num2=parseInt(prompt("Ingrese el segundo numero: "));
    let n=1;
    while(n<=50){
        if(n==num1 || n ==num2){
            console.log("¡Lotería!");
        }else{
            console.log(n);
        }
        n++;
    }
}else if(opcion==3){
    alert("3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.");
    let num=1;
    let numeros = [];
    while(num!=0){
        num=parseInt(prompt("Ingrese un numero: "));
        if(!isNaN(num)&& num!=0){
            numeros.push(num);
        }
    }
    alert("Los numero ingresados fueron ["+ numeros + "]");
}else if(opcion==4){
    alert("4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.");
    let texto =' ';
    let concatenar= '';
    while(texto!== ''){
        texto=prompt("Ingrese una letra o palabra (deje vacío para terminar):");
        if(!/\d/.test(texto)){
            concatenar = concatenar+" "+texto;
        }
    }
    alert("Las palabras concatenadas son: "+concatenar)
}else if(opcion==5){
    alert("5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.");
    let dia ='';
    let convetir='';
    while(dia!='domingo'){
        dia=prompt("Ingrese un dia de la semana (domingo para terminar):");
        convetir=dia.toLowerCase();
        if(convetir=='lunes'){
            alert("¡Comienza la semana con energía y determinación!");
        }else if(convetir=='martes'){
            alert("¡Aprovecha al máximo este día y mantén el ritmo!");
        }else if(convetir=='miercoles'){
            alert("¡Mitad de semana! Sigue adelante, estás más cerca de tus metas.");
        }else if(convetir=='jueves'){
            alert("¡No te rindas, el fin de semana está a la vuelta de la esquina!");
        }else if(convetir=='viernes'){
            alert(" ¡Felicidades, has llegado al viernes! Disfruta del fin de semana que se acerca.");
        }else if(convetir=='sabado'){
            alert("¡Es tiempo de relajarse y disfrutar de actividades que te gustan!");
        }else if(convetir=='domingo'){
            break;
        }else{
            alert("El dato ingresado no pertenece a un dia de la semana. Intenta de nuevo.");
        }
    }
    alert("Ve a descansar")
}else{
    alert("La opcion ingresada no corresponde a ninguno de los 5 ejercicios solicitados.");
}
