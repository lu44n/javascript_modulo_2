let pacientes = []
alert("Sistema inicializado com sucesso!")
alert("A lista de pacientes está vazia ainda...")
let opc_menu = prompt("Escolha uma das opções abaixo:\n1. Novo Paciente\n2. Consultar Paciente\n3. Lista de Pacientes\n4. Sair")

while (opc_menu != 4) {
    switch (opc_menu) {
        case "1":
            const nome_paciente = prompt("Insira o nome do paciente: ")
            pacientes.push(pacientes.length + 1 + "º " + nome_paciente)
            alert("Paciente registrado na fila de espera!")
            break;
        case "2":
            if (pacientes.length > 0){
                let removido = pacientes.shift()
                alert("Paciente: " + removido + " foi atendido com sucesso!")
            }
            else{
                alert("Não há pacientes na fila de espera!")
            }
            break;
        case "3":
            let lista_pacientes = ""
            for (let i = 0; i < pacientes.length; i++) {
                lista_pacientes += pacientes[i] + "\n"
            }
            alert("LISTA DE PACIENTES:\n" + lista_pacientes)
            break;
        case "4":
            alert("Obrigado por utilizar nossos serviços!")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
    opc_menu = prompt("Escolha uma das opções abaixo:\n1. Novo Paciente\n2. Consultar Paciente\n3. Lista de Pacientes\n4. Sair")
}