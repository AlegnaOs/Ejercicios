let opcion=parseInt(prompt("Ingrese el ejercicio a validar: "));
if(opcion==1){
    alert("1. Solicitar al usuario que responda a la pregunta ('¿Eres bellisimo/a?'), en caso de contestar sí,responder 'Ciertamente', en caso de contestar no, responder: 'No te creo'");
    let bello = prompt("¿Eres bellisimo/a?");
    let ser = bello.toLowerCase();
    if(ser=="si")
    {
        alert("Ciertamente.");
    }else if (ser =="no"){
        alert("No te creo.");
    }else{
        alert("El valor ingresado no corresponde a una respuesta esperada.");
    }
}else if (opcion==2){
    alert("2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de 'x número es divisible entre 2' o 'x núm no es divisible entre 2'.");
    let num=parseInt(prompt("Ingrese un número para validar si es divisible entre 2:"));
    mod = num % 2;
    if(mod===0){
    alert(num + " es un número divisible entre 2.");
    }else if(mod>0){
    alert(num + " no es un número divisible entre 2.");
    }else{
    alert("El valor ingresado no es valido.");
    }
}else if (opcion==3){
    alert("3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.");
    let num1=parseInt(prompt("Ingrese un número para validar si es par o no:"));
    par = num1 % 2;
    if(par===0){
        alert(num1 + " es un número par.");
    }else if(par>0){
    alert(num1 + " no es un número par.");
    }else{
        alert("El valor ingresado no es valido.");
    }
}else if(opcion==4){
    alert("4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje 'Lo sentimos, sigue participando'.");
    let num2=parseInt(prompt("Ingrese un número de cliente:"));
    if(num2==1000){
        alert("Ganaste un premio.");
    }else{
        alert(num2 +" - Lo sentimos, sigue participando.");
    }
}else if(opcion==5){
    alert("5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.");
    let num3=parseInt(prompt("Ingrese el primer número:"));
    let num4=parseInt(prompt("Ingrese el segundo número:"));
    if(num3>num4){
        alert("El segundo número ingresado " + num4 + " es menor que el primer número " + num3);
    }else if(num4>num3){
        alert("El primer número ingresado " + num3 + " es menor que el segundo número " + num4);
    }else{
        alert("No puedo realizar la comparacion.");
    }
}else if(opcion==6){
    alert("6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.");
    let num5=parseInt(prompt("Ingrese el primer número:"));
    let num6=parseInt(prompt("Ingrese el segundo número:"));
    let num7=parseInt(prompt("Ingrese el tercer número:"));
    if(num5>=num6 && num5>=num7){
        if(num5==num6){
            alert("El primer y segundo número ingresado " + num5 +" - "+ num6 +" son mayores que el otro número.");
        }else if(num5==num7){
            alert("El primer y tercer número ingresado " + num5 +" - "+ num7 +" son mayores que el otro número."); 
        }else{
            alert("El primer número ingresado " + num5 + " es mayor que los demas números.");
        }    
    }else if(num6>=num7){
        if(num6==num7){
            alert("El segundo y tercer número ingresado " + num6 +" - "+ num7 +" son mayores que el otro número.");
          }else{
            alert("El segundo número ingresado " + num6 + " es mayor que los demas números.");
          }
    }else if(num6<num7){
        alert("El Tercer número ingresado " + num7 + " es mayor que los demas números.");
    }else{
        alert("No puedo realizar la comparacion.");
    }
}else if(opcion==7){
    alert("7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.");
    let dia = prompt("Ingrese un día de la semana (lunes, martes, miercoles, jueves, viernes, sabado, domingo): ");
    let semana = dia.toLowerCase();
    if(semana=="lunes"){
        alert("la semana inicia todos los " + semana + " y es una oportunidad de un nuevo comienzo.");
    }else if(semana=="viernes"){
        alert("Todo porque hoy es " + semana + " y el cuerpo lo sabe.");
    }else if(semana=="sabado" || semana=="domingo"){
        alert("Un dia para relajarse, compartir en familia y divertirse.");
    }else{
        alert("Vive la vida, minuto a minuto y encontraras en cada momento un motivo por el cual continuar y disfrutar de los que te aman.");
    }
}else if(opcion==8){
    alert("8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.");
    let calificacion=parseInt(prompt("Ingrese una calificación (entre 1 y 10):"));
    if(calificacion==10){
    alert("Excelente.");
    }else if(calificacion==9){
    alert("Bien.");
    }else if(calificacion>=6 && calificacion<=8){
        alert("Regular.");
    }else if(calificacion<6 && calificacion>=0){
        alert("Reprobado.");
    }else{
    alert("MENSAJE DE ERROR -> SIGA LAS INSTRUCCIONES SE SOLICITO UN NUMERO ENTRE 1 Y 10.");
    }
}else if(opcion==9){
    alert("9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija \nEl helado sin topping cuesta 50 MXN. \nEl topping de oreo cuesta 10 MXN. \nEl topping de KitKat cuesta 15 MXN. \nEl topping de brownie cuesta 20 MXN. \nEn caso de no disponer del topping solicitado por el usuario, el programa le indicará '“'no tenemos este topping, lo sentimos.'”' y a continuación le informará el precio del helado sin ningún topping.");
    let helado=parseInt(prompt("Desea comprar un helado\n(Ingrese 1 para si o 0 para no): "));
    let total = 0;
    if(helado==1){
        let toppings=parseInt(prompt("¿Desea algun topping?\n(1 para si o 0 para no)"));
        if(toppings>0){
            total=50;
            let topping1=prompt("¿Desea topping de oreo?\n(1 para si o 0 para no)");
            if(topping1==1){
                total= total + 10;
            }
            let topping2=prompt("¿Desea topping de KitKat?\n(1 para si o 0 para no)");
            if(topping2==1){
                total = total +15;
            }
            let topping3=prompt("¿Desea topping de brownie?\n(1 para si o 0 para no)");
            if(topping3==1){
                total= total+20;
            }   
            let topping4=prompt("¿Desea algun otro topping?\n(1 para si o 0 para no)");
            if(topping4==1){
                alert("no tenemos este topping, lo sentimos.");
            }
            alert("El total a pagar es " +total+ " MXN.");
        }else{
            total=50;
            alert("El total a pagar es " +total+ " MXN.");
        }        
    }else{
        alert("Gracias por venir, cuando desee un helado, regrese.");
    }
}else if(opcion==10){
    alert("10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida. \nEl programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: \nCourse: $4999 MXN \nCarrera $3999 MXN \nMaster: $2999 MXN \nAdicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final. \nBeca Facebook: 20% de descuento. \nBeca Google: 15% de descuento. \nBeca Jesua: 50% de descuento. \nFinalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones: \nCourse: 2 meses \nCarrera 6 meses \nMaster: 12 meses");
    let programa=parseInt(prompt("Elija:\n1.Course\n2.Carrera\n3.Master "));
    let beca=parseInt(prompt("Cuenta con alguna beca:\n1.Facebook\n2.Google\n3.Jesua\n0.No Cuento con Beca."));
    let mensualidad=0;
    let duracion=0;
    let total=0;
    let precio=0;
    if(programa==1){
        mensualidad=4999;
        duracion=2;
        total=mensualidad*duracion;
        if(beca==1){
            precio=(total*20)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==2){
            precio=(total*15)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==3){
            precio=(total*50)/100;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==0){
            alert("El costo mensual del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else{
            alert("Ingreso un valor invalido.")
        }
    }else if(programa==2){
        mensualidad=3999;
        duracion=6;
        total=mensualidad*duracion;
        if(beca==1){
            precio=(total*20)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==2){
            precio=(total*15)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==3){
            precio=(total*50)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==0){
            alert("El costo mensual del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else{
            alert("Ingreso un valor invalido.")
        }
    }else if(programa==3){
        mensualidad=2999;
        duracion=12;
        total=mensualidad*duracion;
        if(beca==1){
            precio=(total*20)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==2){
            precio=(total*15)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==3){
            precio=(total*50)/100;
            total=total-precio;
            mensualidad=total/duracion;
            alert("El costo mensual con descuento del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else if(beca==0){
            alert("El costo mensual del programa es de "+mensualidad+" y El precio final por el curso elegido es de: $"+total+" MXN.");
        }else{
            alert("Ingreso un valor invalido.")
        }
    }else{
        alert("Ingreso un valor invalido.")
    }   
}else if(opcion==11){
    alert("11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:\nSi el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.\nSi los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:\ntotal a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.");
    let vehiculo=prompt("Ingrese el tipo de vehiculo:\n1. Carro\n2. Moto\n3. Autobus");
    let kilometros=parseInt(prompt("Ingrese la cantidad de kilometros recorridos:"));
    let pagar=0;
    let extra=0;
    if(vehiculo==1){
        if(kilometros>=0 && kilometros<=100){
            extra=5;
            pagar=(0.20*kilometros)+extra;
            alert("el total a pagar de acuerdo a la distancia recorrida "+kilometros+" KM por el vehiculo y con cargo extra de "+extra+" MXN por los litros consumidos es de $"+pagar+ "MXN.")
        }else if(kilometros>=100){
            extra=10;
            pagar=(0.20*kilometros)+extra;
            alert("el total a pagar de acuerdo a la distancia recorrida "+kilometros+" KM por el vehiculo y con cargo extra de "+extra+" MXN por los litros consumidos es de $"+pagar+ "MXN.")
        }else{
            alert("El valor ingresado no es valido.")
        }
    }else if(vehiculo==2){
        if(kilometros>=0 && kilometros<=100){
            extra=5;
            pagar=(0.10*kilometros)+extra;
            alert("el total a pagar de acuerdo a la distancia recorrida "+kilometros+" KM por el vehiculo y con cargo extra de "+extra+" MXN por los litros consumidos es de $"+pagar+ "MXN.")
        }else if(kilometros>=100){
            extra=10;
            pagar=(0.10*kilometros)+extra;
            alert("el total a pagar de acuerdo a la distancia recorrida "+kilometros+" KM por el vehiculo y con cargo extra de "+extra+" MXN por los litros consumidos es de $"+pagar+ "MXN.")
        }else{
            alert("El valor ingresado no es valido.")
        }
    }else if(vehiculo==3){
        if(kilometros>=0 && kilometros<=100){
            extra=5;
            pagar=(0.50*kilometros)+extra;
            alert("el total a pagar de acuerdo a la distancia recorrida "+kilometros+" KM por el vehiculo y con cargo extra de "+extra+" MXN por los litros consumidos es de $"+pagar+ "MXN.")
        }else if(kilometros>=100){
            extra=10;
            pagar=(0.50*kilometros)+extra;
            alert("el total a pagar de acuerdo a la distancia recorrida "+kilometros+" KM por el vehiculo y con cargo extra de "+extra+" MXN por los litros consumidos es de $"+pagar+ "MXN.")
        }else{
            alert("El valor ingresado no es valido.")
        }
    }else{
        alert("El valor ingresado no es valido.")
    }    
}else{
    alert("La opcion ingresada no corresponde a ninguno de los 11 ejercicios solicitados.");
}