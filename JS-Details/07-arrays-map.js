const hobbies = [
    "Correr",
    "Nadar",
    "Jogar bola",
    "Viajar",
    "Lutar",
    "Conversar Muito",
    "Ler Livro",
    "Malhar na Academmia",
    "Maratornar Series",
    "Dormir",
    "Jogar Basquete"
];

// Utilizado para iterar arrays e retornar um novo array,
//  compondo um novo resultada para cada indice do array antigo veja:
const novosHobbies = hobbies.map((hob)=> {
    return `<p>${hob}</p>`;
});

console.log(novosHobbies);