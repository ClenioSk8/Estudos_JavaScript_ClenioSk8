function saudacao() {
    console.log("Olá, seja bem-vindo!")
  }
  
  function soma(a, b) {
    return a + b;
  }
  
  const subtracao = (a, b) => a - b
  
  saudacao() 
  
  const numero1 = 10
  const numero2 = 5
  
  const resultadoSoma = soma(numero1, numero2)
  console.log(`A soma de ${numero1} e ${numero2} é: ${resultadoSoma}`)
  
  const resultadoSubtracao = subtracao(numero1, numero2)
  console.log(`A subtração de ${numero1} e ${numero2} é: ${resultadoSubtracao}`)
  