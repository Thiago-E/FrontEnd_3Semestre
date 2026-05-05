const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];

// Rodas o map gerando um novo array com o dobro dos numeros do original,

const novosNumeros = numeros.map((num) => {
    return num * 2;
});

console.log(`Array modificado`)
console.log();
// após, exiba o valores do array dobro no console utilizando o foreach,
let textoResultado = "";
novosNumeros.forEach((num) => {
    textoResultado += `${num} |`; //acumula texto em um string(sem pular linha)
});	


textoResultado = textoResultado.substring(0,textoResultado.length -2)
console.log(textoResultado)