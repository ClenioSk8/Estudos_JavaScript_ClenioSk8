window.alert('jogo da tabuada - digite  "1" para soma "2" para subtração "3" multiplicação "4" divisão e "0" para sair ')

// Função para realizar a soma
function soma(a, b) {
    return a + b;
}

// Função para realizar a subtração
function subtracao(a, b) {
    return a - b;
}

// Função para realizar a multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// Função para realizar a divisão
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!"
    }
    return a / b;
}

// Loop principal da calculadora
let continuarCalculando = true;

while (continuarCalculando) {
    console.log("Operações disponíveis:")
    console.log("1: Soma")
    console.log("2: Subtração")
    console.log("3: Multiplicação")
    console.log("4: Divisão")
    console.log("0: Sair")

    const escolha = parseInt(prompt("Digite o número da operação desejada:      lembrando 1 para soma 2 para subtração 3 multiplicação 4 divisão e 0 para sair "))
    

    switch (escolha) {
        case 1:
            const somaA = parseFloat(prompt("Digite o primeiro valor:"))
            const somaB = parseFloat(prompt("Digite o segundo valor:"))
            document.write("Resultado da Soma: " + soma(somaA, somaB))
            document.write('<br>')            
            break;
        case 2:
            const subA = parseFloat(prompt("Digite o primeiro valor:"))
            const subB = parseFloat(prompt("Digite o segundo valor:"))
            document.write("Resultado da Subtração: " + subtracao(subA, subB))
            document.write('<br>')
            break;
        case 3:
            const multA = parseFloat(prompt("Digite o primeiro valor:"))
            const multB = parseFloat(prompt("Digite o segundo valor:"))
            document.write("Resultado da Multiplicação: " + multiplicacao(multA, multB))
            document.write('<br>')
            break;
        case 4:
            const divA = parseFloat(prompt("Digite o primeiro valor:"))
            const divB = parseFloat(prompt("Digite o segundo valor:"))
            document.write("Resultado da Divisão: " + divisao(divA, divB))
            document.write('<br>')
            break;
        case 0:
            continuarCalculando = false
            break;
        default:
            document.write("Essa opção não existe. Tente novamente.")
    }
}
