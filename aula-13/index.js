function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(7)
// dobro()

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + " !")
}

// dizerOla("Mikael")
// dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

// soma(7, 6)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo,
    }

    console.log(usuario)
}

// criarUsuario("Mikael", "mikael@gmail.com", "123456")

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function objetoComoParametro(usuario) {
    // ...
    usuario.nome
    usuario.email
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)