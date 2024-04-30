let cartas = []
alert("Sistema inicializado com sucesso!")
let num_cartas = 0
let opc_menu = prompt("Numero de cartas no baralho: " + num_cartas + "\n\nEscolha uma das opções abaixo:\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair")

while (opc_menu != 3){
    switch (opc_menu) {
        case "1":
            const carta = prompt("Insira a carta: ")
            cartas.push(carta)
            num_cartas += 1
            alert("Carta adicionada com sucesso!")
            break;
        case "2":
            const carta_puxada = cartas.pop()
            num_cartas -= 1
            alert("A carta " + carta_puxada + " foi puxada com sucesso!")
            break;
        case "3":
            alert("Obrigado por utilizar nossos serviços!")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
    opc_menu = prompt("Numero de cartas no baralho: " + num_cartas + "\n\nEscolha uma das opções abaixo:\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair")
}