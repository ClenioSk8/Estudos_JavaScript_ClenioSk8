// function calcularArea (largura, comprimento ) {
//     var area = largura * comprimento
//     return(area)
// }

// const { setPrompt } = require("readline-sync")


// var listaelementos = []

// listaelementos[1] = 'banana'
// listaelementos[2] = 'jaca'
// listaelementos[3] = ' manga'

// console.log(listaelementos[1])
// console.log(listaelementos)


// var lista_de_frutas = ["banana" , "maca", "azeite"]

// lista_de_frutas.push('laranja')//unishif início//push no final

// console.log(lista_de_frutas)

// var lista_de_frutas = ["banana" , "maca", "azeite"]

// lista_de_frutas.pop()// pop remove

// console.log(lista_de_frutas)

// let n1 = [2,3,4,5]
// let n2 = [6,7,8,9]
// let soma = (n1[3]) + (n2[0])
// let soma = (n1[0,1,2,3] + n2[0,1,2,3])
// console.log(soma)

// var listadeelementos = Array()

// listadeelementos['frutas'] = ['banana', 'uva', 'jaca']
// listadeelementos['pessoas']=[ 'clenio', 'karina', 'paula']
// console.log(listadeelementos)
// document.write(listadeelementos['frutas'][1])


// var n1 = Number(window.prompt(' digite sua primeira nota'))
// var n2 = Number(window.prompt(' digite sua segunda nota'))
// var media = (n1 + n2)/2
// console.log(media)
// if  (media >=7){
//     document.write(' aprovado ')
// }else{
//     document.write(' reprovado ')
// }



// let tabuada = 0

// for(let tabuada = 1; tabuada <= 10; tabuada++){
//     for(var i=1; i <=10; i++){
//         var resultado = i*tabuada
//         document.write(tabuada + ' x ' + i + ' = ' + resultado)
//         document.write('<br>')
//     }
//     document.write('<br>')
// }

// fila_adic = Number(window.prompt( ' digite o numero adicionado'))

// var fila = []

//     // fila.push(1)
//     // fila.push(2)
//     // fila.push(3)
//     // fila.push(4)
//     // fila.push(5)
//     // fila.push(6)
//     fila.push(fila_adic)

// console.log(' a fila atual é ', fila)

// // var remover_element = fila.shift()
// var adicionar_element = fila.push()
// console.log(' o elemento adicionado foi', adicionar_element)
// document.write(' o elemento adicionado foi', adicionar_element)
// document.write('<br>')

// console.log(' a fila atual é :', fila)
// document.write(' a fila atual é :', fila)
// document.write('<br>')
// if(fila.length >0){

//     console.log(' a fila não esta vazia')
//     document.write('a fila não esta vazia')
//     document.write('<br>')
//     adicionar_element = fila.push()
//     // remover_element = fila.shift()
//     console.log(' o elemento removido é ', adicionar_element)
//     document.write(' o elemento removido é ', adicionar_element)
//     document.write('<br>')
//     console.log(' a fila atual é', fila)
//     document.write(' a fila atual é', fila)
//     document.write('<br>')}

//     else{ (fila.length = 0)
//         console.log(' a fila está vazia')
//         document.write(' a fila está vazia')
//         document.write('<br>')}


// let teste = 3.1
// console.log(typeof(teste))
// console.log(teste)

// let nome = window.prompt(' digite seu nome : ')
// let idade =parseInt(window.prompt(' digite sua idade : '))
// let altura = parseFloat(window.prompt(' digite sua altura : '))
// let Maior_de_idade =confirm(' " OK "para maior idade " Cancelar" para menor Idade " ')

// resultado = (`seu nome : ${nome} - do tipo : ${typeof(nome)}<br> 
//     sua idade é : ${idade} - do tipo ${typeof(idade)}<br> 
//     sua altura é : ${altura} - do tipo ${typeof(altura)}<br>
//     maior de idade ? ${Maior_de_idade} - do tipo ${typeof(Maior_de_idade)}<br>
//     `)

// if(idade >= 18){
//     document.write(' maior de idade')
//     document.write('<br>')
// document.write(resultado)

// }else{
//     document.write('menor de idade')
//     document.write('<br>')
// document.write(resultado)
// }


// Captura os valores das variáveis do usuário usando o prompt
// var nome = prompt("Digite o seu nome:");
// var idade = parseInt(prompt("Digite a sua idade:")); // Converte para inteiro
// var altura = parseFloat(prompt("Digite a sua altura (em metros):")); // Converte para float
// var maior_de_idade = confirm("Você é maior de idade?"); // Retorna true (OK) ou false (Cancelar)

// Impressão dos valores das variáveis
// console.log("Nome: " + nome);
// console.log("Idade: " + idade);
// console.log("Altura: " + altura);
// console.log(typeof(altura))
// console.log("Maior de idade? " + maior_de_idade);
// console.log(typeof(maior_de_idade))




// let nome = window.prompt(' digite seu nome : ')
// let idade =parseInt(window.prompt(' digite sua idade : '))
// let altura = parseFloat(window.prompt(' digite sua altura : '))
// let Maior_de_idade =confirm(' " OK "para maior idade " Cancelar" para menor Idade " ')

// resultado = (`seu nome : ${nome} - do tipo : ${typeof(nome)}<br> 
//     sua idade é : ${idade} - do tipo ${typeof(idade)}<br> 
//     sua altura é : ${altura} - do tipo ${typeof(altura)}<br>
//     maior de idade ? ${Maior_de_idade} - do tipo ${typeof(Maior_de_idade)}<br>
//     `)

// if(idade >= 18){
//     document.write(' maior de idade')
//     document.write('<br>')
// document.write(resultado)

// }else{
//     document.write('menor de idade')
//     document.write('<br>')
// document.write(resultado)
// }



// let nome = prompt ('Digite seu nome')
// let idade = parseInt (prompt('Digite sua idade'))
// let altura = parseFloat (prompt('Digite sua altura'))
// let maiorDeIdade

// if (idade >= 18) {
//     maiorDeIdade = true
// } else {
//     maiorDeIdade = false
// }

// document.write (nome + '<br>')
// document.write (idade + '<br>')
// document.write (altura + '<br>')
// document.write (maiorDeIdade)
// console.log(typeof(maiorDeIdade)) 



// let nome = window.prompt(' nome do aluno')
// let nota_1 = parseInt(window.prompt(' digite sua primeira nota : '))
// let nota_2 = parseInt(window.prompt(' digite sua segunda nota'))
// let numero_faltas = parseInt(window.prompt(' digite sua quatidade de faltas'))
// let media = (nota_1 + nota_2)/2

// document.write( ' Nome do aluno é : ' + nome + "<br>" )
// if(media >=7 && numero_faltas <3){
//     document.write(` Sr ${nome} você esta aprovado `)
//     document.write('<br>')
// }else{document.write(` Sr ${nome} vocé esta reprovado`)}   


// let nome = window.prompt(' digite o nome do aluno : ')
// let nota_1 = parseInt(window.prompt(' digite sua primeira nota : '))
// let nota_2 = parseInt(window.prompt(' digite sua segunda nota : '))
// let numero_faltas = parseInt(window.prompt(' digite sua quantidade de faltas : '))
// let media = (nota_1 + nota_2)/2

// document.write( ' Nome do aluno é : ' + nome + "<br>" )
// if(media >=7 && numero_faltas <3){
//     document.write(` Sr ${nome} você esta aprovado `)
//     document.write('<br>')
// }else{document.write(` Sr ${nome} vocé esta reprovado`)} 


// let nomeAluno = "Marcio"; 
// let notas = [9.0, 8.8];
// let numeroFaltas = 2;
// let media = (notas[0] + notas[1]) / 2

// if(media < 7){
//   console.log("ALUNO REPROVADO")
// } else if(numeroFaltas > 3){
//   console.log("ALUNO REPROVADO") 
// } else{
//   console.log("O ALUNO ESTÁ APROVADO")
// }


// function portce(num, per){
//     return (num/100)*per
// }
// console.log(portce(700, 48.95))





// let soma = 0
// for (let i = 10; i<=30; i++){
//     if (i%2==1) {
//         soma +=i
//     }

// }

// console.log(soma)



// let soma = 0

// for (let i = 0; i<=30; i++){
//     if (i>10 && i<=30) {
//         if (i%2==1) {
//             soma +=i
//         }

//     }

// }

// console.log(soma)



// let numeros  = [10, 20, -15]
// for (let numeros >0; <100; numeros++){
// }


// let saldoPositivo = [100, 20, 0, -10, 10].filter(saldo=> saldo<0)

// console.log(saldoPositivo)




// let soma = 0
// for(let i = 8; i<30; i++){
//     if(i%2 === 0){
//         if(soma+=i){

//         }
//     }
// }
// console.log(soma)


// function calcularMediaArray(array){
//     var numeros = array.length // conta o que tem dentro de uma lista 5
//     var soma = 0 // deixa zerado pra ter parâmetro minimo
//     for(var i = 0; i < numeros; i++){ // todos os números do array em  sequência
//         soma += array[i] // vai somar todos os números do array
//     }
//     return soma / numeros
// }

// var arr = [5,8,9,10,50]
// var madia = calcularMediaArray(arr)
// console.log(madia)

// let nota1 = parseFloat(window.prompt(' digite sua primeira nota : '))
// let nota2 = parseFloat(window.prompt(' digite sua primeira nota : '))
// let nota3 = parseFloat(window.prompt(' digite sua primeira nota : '))
// let nota4 = parseFloat(window.prompt(' digite sua primeira nota : '))
// let faltas =
//     let madia = (nota1 + nota2 + nota3 + nota4) / 4
// console.log(madia)
// if (media >= 7 && media <= 10) {
//     document.write('aprovado')
// } else if (madia >= 3 && media < 7) {
//     document.write('recuperação')
// } else if (madia < 3) {
//     document.write(' reprovado')
// } else if (madia > 10) {
//     document.write('Valor Inválido ')
// }





// let soma = 0
// for(let i = 8; i<30; i++){
//     if(i%2 === 0){
//         if(soma+=i){

//         }
//     }
// }
// console.log(soma)


// for(let i = 10; i < 50; i++)
//     console.log(i)



// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
//  }


// let texto = 'clenio everson gomes de araujo'
// let teste = texto.replace('clenio',' karina ')

// document.write(teste)

// let texto = 'clenio everson gomes de araujo'
// let teste = texto.toLocaleUpperCase()

// document.write(teste)

// let texto = 'clenio everson gomes de araujo'
// let teste = texto.length

// document.write(teste)


// let texto = ' hello world                    .      .     '
// let teste = texto.trim()
// document.write(teste)

// let texto = 'hello world                 .   . '
// let teste = texto.trimEnd()
// document.write(teste)


// let text = "Visit W3Schools!";
// let n = text.search("ls")
// console.log(n)


// function gerRadom ( min,max){
//     return Math.floor(Math.random() * (max -  min )) + min
// }

// let num = gerRadom(10,100)

// console.log(' resultado ' + num)

// let listaNomes = ['flavio', 'clenio', 'ricardo']
// listaNomes.forEach((item)=> console.log(item))

// let numeros = [0,1,2,3,4,5,6]
//     function tabuada(item){    
//     document.write(item*5 + '<br>')
// }

// numeros.forEach(tabuada)

// let numeros = [0,1,2,3,4,5,6]
// let soma = 0

// function somarArray(item,indice){
//     soma+= item
//     console.log('indice' + indice + ' = ' + soma)
// }
// numeros.forEach(somarArray)





// let array = [10,15,12]
// let creScente = array.sort((a, b) => a - b)
// console.log(creScente)

// let numeros = []

// for(let i = 1; i<=3; i++){
//     numeros.push(parseInt(prompt(' texto ' + i + ' texto')))
// }

// numeros.sort((a,b)=> a-b)
// document.write(numeros) 





// for(let i = 50; i > 10; i--)
//     console.log(i)



// let i = parseInt(prompt('digete o valor 10'))
//     if (i === 10) {
//         while (i <=50){
//             document.write(i)
//             i++
//         }
//     }else{
//         document.write(' o valor informando é diferente de 10')
//     }

// Inicialização dos votos
// let votosCandidatoX = 0;
// let votosCandidatoY = 0;
// let votosCandidatoZ = 0;
// let votosBrancoNulo = 0;

// // Função para verificar se o voto é válido
// function validarVoto(voto) {
//   if (voto === 889) {
//     votosCandidatoX++;
//   } else if (voto === 847) {
//     votosCandidatoY++;
//   } else if (voto === 515) {
//     votosCandidatoZ++;
//   } else if (voto === 0) {
//     votosBrancoNulo++;
//   } else {
//     console.log("Voto inválido. Vote novamente.");
//   }
// }

// // Loop para coletar os votos até que a votação seja finalizada
// let votacaoFinalizada = false;
// while (!votacaoFinalizada) {
//   const voto = parseInt(prompt("Digite o número do candidato (889 para X, 847 para Y, 515 para Z, 0 para branco, ou outro valor para sair):"));
//   if (!isNaN(voto)) {
//     validarVoto(voto);
//   } else {
//     console.log("Entrada inválida. Vote novamente.");
//   }

//   const finalizar = prompt("Deseja finalizar a votação? (S para sim, qualquer outra tecla para continuar)");
//   if (finalizar.toUpperCase() === "S") {
//     votacaoFinalizada = true;
//   }
// }

// // Determinar o vencedor
// let vencedor = "";
// let maiorNumeroDeVotos = 0;

// if (votosCandidatoX > maiorNumeroDeVotos) {
//   vencedor = "Candidato X";
//   maiorNumeroDeVotos = votosCandidatoX;
// }
// if (votosCandidatoY > maiorNumeroDeVotos) {
//   vencedor = "Candidato Y";
//   maiorNumeroDeVotos = votosCandidatoY;
//          }
// if (votosCandidatoZ > maiorNumeroDeVotos) {
//   vencedor = "Candidato Z";
//   maiorNumeroDeVotos = votosCandidatoZ;
// }

// // Exibir resultados
// document.write("Resultado da votação:");
// document.write("Candidato X: " + votosCandidatoX + " votos <br>");
// document.write("Candidato Y: " + votosCandidatoY + " votos <br>");
// document.write("Candidato Z: " + votosCandidatoZ + " votos <br>");
// document.write("Votos em branco/nulos: " + votosBrancoNulo + " votos <br>");
// document.write("O vencedor é: " + vencedor + " com " + maiorNumeroDeVotos + " votos. <br>");




// window.alert('jogo da tabuada - sendo  1 para soma 2 para subtração 3 multiplicação e 4 divisão e 0 para sair ')

// // Função para realizar a soma
// function soma(a, b) {
//     return a + b;
// }

// // Função para realizar a subtração
// function subtracao(a, b) {
//     return a - b;
// }

// // Função para realizar a multiplicação
// function multiplicacao(a, b) {
//     return a * b;
// }

// // Função para realizar a divisão
// function divisao(a, b) {
//     if (b === 0) {
//         return "Erro: Divisão por zero!";
//     }
//     return a / b;
// }

// // Loop principal da calculadora
// let continuarCalculando = true;

// while (continuarCalculando) {
//     console.log("Operações disponíveis:");
//     console.log("1: Soma");
//     console.log("2: Subtração");
//     console.log("3: Multiplicação");
//     console.log("4: Divisão");
//     console.log("0: Sair");

//     const escolha = parseInt(prompt("Digite o número da operação desejada:"));

//     switch (escolha) {
//         case 1:
//             const somaA = parseFloat(prompt("Digite o primeiro valor:"));
//             const somaB = parseFloat(prompt("Digite o segundo valor:"));
//             document.write("Resultado da Soma: " + soma(somaA, somaB));            
//             break;
//         case 2:
//             const subA = parseFloat(prompt("Digite o primeiro valor:"));
//             const subB = parseFloat(prompt("Digite o segundo valor:"));
//             document.write("Resultado da Subtração: " + subtracao(subA, subB));
//             break;
//         case 3:
//             const multA = parseFloat(prompt("Digite o primeiro valor:"));
//             const multB = parseFloat(prompt("Digite o segundo valor:"));
//             document.write("Resultado da Multiplicação: " + multiplicacao(multA, multB));
//             break;
//         case 4:
//             const divA = parseFloat(prompt("Digite o primeiro valor:"));
//             const divB = parseFloat(prompt("Digite o segundo valor:"));
//             document.write("Resultado da Divisão: " + divisao(divA, divB));
//             break;
//         case 0:
//             continuarCalculando = false;
//             break;
//         default:
//             document.write("Essa opção não existe. Tente novamente.");
//     }
// }

// class ContaBancaria {
//     constructor(){
//         this.agencia = '917-3'
//         this.numeroconta = '32450-8'
//         this.saldo = 200
//         this.limite = 450
    
//     }

//     depositar(){    
//         this.saldo += valorDeposito
//     }

//     Sacar(){
//         this.saldo -= valorSaque        
//     }

//     verificarSaldo(){
//         return this.saldo            
//     }
// }     
