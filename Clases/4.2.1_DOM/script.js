// La empresa perfumes latinos premiará a su empleado del mes (quien más dinero recaude en ventas) con una comisión y requiere un programa que almacene y muestre:
// Qué cantidad de cada productos vendió cada vendedor.
// La suma total de dinero recolectada por cada vendedor.
// Nombre del empleado del mes, en caso de haber vendido lo mismo indicar que fue un empate.
// La empresa actualmente cuenta con los siguientes 4 productos que tienen los siguientes nombres y precios:
// Aqua: 200 usd.
// Emoción: 180 usd.
// Alegría: 160 usd.
// Frescura: 150 usd.
// Y dos vendedores Juana y Pedro.
// Notas.
// Los resultados deben visualizarse en consola y deben activarse a través de botones.
// El programa debe validar y mostrar un mensaje de error si no se ingresa un valor numérico.(Opcional).
// Debe hacer uso de funciones, arrays y estructuras de control para resolver el ejercicio.
// Realizar el ejercicio por medio de cualquiera de los métodos de salidas en JS (console, alert o document).

$(document).ready(function(){

    let prod = ["Aqua","Emoción","Alegría","Frescura"];
    let price = [200, 180, 160, 150];
    let p; 

    $("#comprar").click(function(){
        var dinero = $("#cash").val();
        var costo = price[p-1];
        var vueltas = dinero - costo;
        var falta = costo - dinero;
        if (dinero > 0) {
            if (dinero == costo) {
                $("#mensaje1").text("Usted compro un@ " + prod[p-1] +"\nPago Completo!!");
                $("#pagar").css("display","none");
            }else if(dinero > costo) {
                $("#mensaje1").text("Usted compro un@ " + prod[p-1] + ".\nSus vueltas son: $" + vueltas);
                $("#pagar").css("display","none");
            } else {
                $("#mensaje1").text("Hacen falta $" + falta + " pesos, para poder comprar el producto.");
            }
            } else {
                $("#mensaje1").text("¿Existen monedas o billetes de esa denominación?\n\nIngresa un valor valido.");
            }      
    });
    $("#Limpiar").click(function(){
        $("#mensaje").text("");
        $("#vendedores-select").val("");
        $("#vendedores-select").val("");
        $('input[type="number"]').val('');
        $("#comprar").css("display","inline");
        console.log("Ingreso a Limpiar");
    });    
});