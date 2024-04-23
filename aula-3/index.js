const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Funções envolvendo Arrays
// [Push] - Adiciona ao final da Array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// [Unshift] - Adiciona ao início da Array
tamanho  = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// [Pop] - Remove o último elemento da Array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// [Shift] - Remove do início da Array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// [Includes] - Verifica se um elemento está presente na Array
const inclui = arr.includes("Gandalf")
console.log(inclui)

// [IndexOf] - Verifica e retorna o indíce de um elemento da Array
const indice = arr.indexOf("Gandalf")
console.log(indice)

// [Slice] - Retorna uma parte da Array (Do 0 até antes do 4)
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// [Concat] - Juntar 2 ou mais Arrays ou Elementos
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// [Splice] - Permite remover elementos em qualquer posição do Array e substituir por novos elementos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}