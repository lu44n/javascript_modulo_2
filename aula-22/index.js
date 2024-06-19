const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map - Permite obter um novo Array a partir de um Array existente!

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function (personagem){
    return personagem.nome
})

console.log(nomes)

// Filter - Permite obter um novo Array contendo apenas elementos específicos de um Array existente!

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc"){
//         orcs.push(personagens[i])
//     }
// }

const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)

// Reduce - Serve para reduzir um Array existente a um valor final qualquer, passando um valor entre cada iteração sobre esse Array e retornando ele no final!

// let nivelTotal = 0

// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }

const nivelTotal = personagens.reduce(function (acumulador, personagem){
    return acumulador + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce (function (acumulador, personagem){
    if (acumulador[personagem.raca]){
        acumulador[personagem.raca].push(personagem)
    }
    else {
        acumulador[personagem.raca] = [personagem]
    }

    return acumulador
}, {})

console.log(racas)

// Sort - Ordena os elementos de um Array a partir de comparações entre duplas de elementos!

const personagensOrdenados = personagens.slice().sort(function (a, b){
    return b.nivel - a.nivel
})

console.log(personagens)
console.log(personagensOrdenados)