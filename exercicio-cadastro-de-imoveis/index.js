alert("Sistema inicializado com sucesso!")
let imoveis = []
let num_imoveis = 0
let menu_opcao = prompt("MENU - IMÓVEIS\n\nNúmero de Imóveis Cadastrados: " + num_imoveis + "\n\n1. Adicionar novo Imóvel.\n2. Lista de Imóveis.\n3. Sair.")

while (menu_opcao != 3) {
    switch (menu_opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Insira o nome do proprietário: ")
            imovel.quartos = prompt("Insira o número de quartos do Imóvel: ")
            imovel.banheiros = prompt("Insira o número de banheiros do Imóvel: ")
            imovel.garagem = prompt("O Imóvel possui garagem? (Sim ou Não) ")

            const imovel_cadastrado = "Proprietário: " + imovel.proprietario + "\nNúmero de quartos: " + imovel.quartos + "\nNúmero de banheiros: " + imovel.banheiros + "\nGaragem: " + imovel.garagem

            imoveis.push(imovel_cadastrado)

            alert("Imóvel cadastrado com sucesso!")
            num_imoveis += 1
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert("Lista de Imóveis:\n\n" + "Imóvel " + (i + 1) + ":" + "\n" + imoveis[i])
            }
            break;
        case "3":
            alert("Obrigado por utilizar nossos serviços!")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
    menu_opcao = prompt("MENU - IMÓVEIS\n\nNúmero de Imóveis Cadastrados: " + num_imoveis + "\n\n1. Adicionar novo Imóvel.\n2. Lista de Imóveis.\n3. Sair.")
}