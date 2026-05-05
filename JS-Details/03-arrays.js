let frutasVermelhas = new Array();
let frutasCitricas = ["Limao","Abacaxi","Maracujá","Tangerina","Acerola"]


// futasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Cereja");


console.log(frutasVermelhas);
console.log(frutasCitricas);


let nome = "Felipe Gonçalves"


let frutaRemovida =  frutasVermelhas.pop();//remove o ultimo item da lista/array
console.log(frutaRemovida);
console.log(frutasVermelhas);


// let frutasRemovida =  frutasVermelhas.shift()
// console.log(frutaRemovida);
// console.log(frutasVermelhas);

let fruitRemovedFromArray = frutasVermelhas.shift();//remove o primeiro item do array
console.log(frutasVermelhas);