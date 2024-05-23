alert("Sistema inicializado com sucesso!")

let menu_opcao = prompt("CALCULADORA GEOMÉTRICA\n\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n\n6. Sair")

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

function areaRetangulo(base, altura) {
    return base * altura
}

function areaQuadrado(lado) {
    return lado * lado
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio) {
    return 3.14 * raio * raio
}

while(menu_opcao != 6) {
    switch (menu_opcao) {
        case "1":
            const base = parseFloat(prompt("Insira a base do triângulo: "))
            const altura = parseFloat(prompt("Insira a altura do triângulo: "))
            const area_triangulo = areaTriangulo(base, altura)
            alert("A área do triângulo é: " + area_triangulo)
            break;
        case "2":
            const base_ret = parseFloat(prompt("Insira a base do retângulo: "))
            const altura_ret = parseFloat(prompt("Insira a altura do retângulo: "))
            const area_retangulo = areaRetangulo(base_ret, altura_ret)
            alert("A área do retângulo é: " + area_retangulo)
            break;
        case "3":
            const lado_quad = parseFloat(prompt("Insira o lado do quadrado: "))
            const area_quadrado = areaQuadrado(lado_quad)
            alert("A área do quadrado é: " + area_quadrado)
            break;
        case "4":
            const baseMaior_trap = parseFloat(prompt("Insira a base maior do trapézio: "))
            const baseMenor_trap = parseFloat(prompt("Insira a base menor do trapézio: "))
            const altura_trap = parseFloat(prompt("Insira a altura do trapézio: "))
            const area_trapezio = areaTrapezio(baseMaior_trap, baseMenor_trap, altura_trap)
            alert("A área do trapézio é: " + area_trapezio)
            break;
        case "5":
            const raio_circ = parseFloat(prompt("Insira o raio do círculo: "))
            const area_circulo = areaCirculo(raio_circ)
            alert("A área do círculo é: " + area_circulo)
            break;
        case "6":
            alert("Obrigado por utilizar nossos serviços!")
            break;
        default:
            alert("Opção inválida, tente novamente!")
            break;
    }
    menu_opcao = prompt("CALCULADORA GEOMÉTRICA\n\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n\n6. Sair")
}