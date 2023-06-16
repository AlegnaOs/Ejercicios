let opcion = parseInt(prompt("Ingrese el ejercicio a validar: "));
if (opcion == 1) {
  alert(
    "1. Crea un programa que imprima en consola los números impares del 1 al 50."
  );
  let mod = 0;
  let arrayImpar = [];
  for (let i = 1; i < 51; i++) {
    mod = i % 2;
    if (mod !== 0) {
      arrayImpar.push(i);
    }
  }
  alert("Los numeros impares del 1 al 50 son: [" + arrayImpar + "]");
} else if (opcion == 2) {
  var pokemons = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
  ];
  alert(
    "2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario."
  );
    let num1=parseInt(prompt("Ingrese un numero: "));
    let numTemporal;
    let poke=[];
    for(let n=1; n<=num1; n++){
        numTemporal = n % 5;
        if(numTemporal == 0){
            poke.push(pokemons[n-1]);
        }
    }
    alert("Los nombres son: ["+poke+"]");
} else if (opcion == 3) {
  alert(
    "3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número."
  );
    let arreglo=[4,"dos",8,"tres",5,9,1,"cero"];
    let arregloFinal=[];
    for(let i=0;i<=arreglo.length;i++){
        if(!isNaN(arreglo[i])){
            arregloFinal.push(arreglo[i]);
        }
    }
    alert("Los numeros del arreglo son: ["+arregloFinal+"]");
} else {
  alert("Ingrese un valor valido solo son 3 ejercicios.");
}
