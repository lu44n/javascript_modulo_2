alert("Sistema inicializado com sucesso!")
let arr_vagas = []

function criar_vaga(nome, desc, data_limit){
    const vaga = {
        nome,
        desc,
        data_limit,
        num_candidatos: 0,
        candidatos: []
    }
    arr_vagas.push(vaga)
}

function listar_vagas(){
    if (arr_vagas.length == 0){
        alert("Não há vagas cadastradas!")
    } else {
        for (let i = 0; i < arr_vagas.length; i++){
            alert("Vaga: " + (i + 1) + "\nÍndice: " + i + "\nNome: " + arr_vagas[i].nome + "\nNúmero de Candidatos: " + arr_vagas[i].num_candidatos)
        }
    }
}

function visualizar_vaga(indice){
    alert("Índice: " + indice + "\nNome: " + arr_vagas[indice].nome + "\nDescrição: " + arr_vagas[indice].desc + "\nData limite: " + arr_vagas[indice].data_limit + "\nNúmero de candidatos: " + arr_vagas[indice].num_candidatos + "\nCandidatos: " + arr_vagas[indice].candidatos)
}

function inscrever_candidato(nome_candidato, indice){
    arr_vagas[indice].num_candidatos += 1
    arr_vagas[indice].candidatos.push(nome_candidato)
}

function excluir_vaga(indice){
    arr_vagas.splice(indice, 1)
}

function system_start() {
    let menu_opc = prompt("SISTEMA DE VAGAS DE EMPREGO\n\n1. Listar vagas disponíveis.\n2. Criar nova vaga.\n3. Visualizar vagas.\n4. Inscrever candidatos.\n5. Excluir vaga.\n6. Sair.")
    while (menu_opc != 6) {
       switch(menu_opc){
        case "1":
            listar_vagas()
            break;
        case "2":
            const nome_vaga = prompt("Insira o nome da vaga: ")
            const desc_vaga = prompt("Insira a descrição da vaga: ")
            const data_limit = prompt("Insira a data limite para inscrição: ")
            criar_vaga(nome_vaga, desc_vaga, data_limit)
            break;
        case "3":
            if (arr_vagas.length === 0){
                alert("Não há vagas cadastradas!")
            }
            else{
                const indice_vaga = parseInt(prompt("Insira o índice da vaga: "))
                if (indice_vaga >= arr_vagas.length){
                    alert("Índice inválido!")
                }
                else{
                    visualizar_vaga(indice_vaga)
                }
            }
            break;
        case "4":
            if (arr_vagas.length === 0){
                alert("Não há vagas cadastradas!")
            }
            else{
                const nome_candidato = prompt("Insira o nome do candidato: ")
                const indice_inscricao = parseInt(prompt("Insira o índice da vaga: "))
                if (indice_inscricao >= arr_vagas.length){
                    alert("Índice inválido!")
                }
                else{
                    const confirm_inscr = prompt("Confirma a inscrição?\n\nDetalhes da vaga:"+ "\nÍndice: " + indice_inscricao + "\nNome: " + arr_vagas[indice_inscricao].nome + "\nDescrição: " + arr_vagas[indice_inscricao].desc + "\nData limite: " + arr_vagas[indice_inscricao].data_limit + "\nNúmero de candidatos: " + arr_vagas[indice_inscricao].num_candidatos)
                    if (confirm_inscr === "Sim"){
                        inscrever_candidato(nome_candidato, indice_inscricao)
                        alert("Inscrição realizada com sucesso!")
                    }
                    else{
                        alert("Inscrição cancelada!")
                    }
                }
            }
            break;
        case "5":
            if (arr_vagas.length === 0){
                alert("Não há vagas cadastradas!")
            }
            else{
                const indice_remove = prompt("Insira o índice da vaga a ser removida: ")
                if (indice_remove >= arr_vagas.length){
                    alert("Índice inválido!")
                }
                else{
                    const confirm_remove = prompt("Confirma a exclusão da vaga?\n\nDetalhes da vaga:"+ "\nÍndice: " + indice_remove + "\nNome: " + arr_vagas[indice_remove].nome + "\nDescrição: " + arr_vagas[indice_remove].desc + "\nData limite: " + arr_vagas[indice_remove].data_limit)
                    if (confirm_remove === "Sim"){
                        excluir_vaga(indice_remove)
                        alert("Vaga excluída com sucesso!")
                    }
                    else{
                        alert("Exclusão cancelada!")
                    }
                }
            }
            break;
        default:
            alert("Opção inválida!")
            break;
       }
       menu_opc = prompt("SISTEMA DE VAGAS DE EMPREGO\n\n1. Listar vagas disponíveis.\n2. Criar nova vaga.\n3. Visualizar vagas.\n4. Inscrever candidatos.\n5. Excluir vaga.\n6. Sair.")
    }
}

system_start()