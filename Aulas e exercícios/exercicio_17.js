const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

const operador = prompt("Escolha o operador (+, -, *, /):");

let resultado;
let sobra;

if (isNaN(valor1) || isNaN(valor2)) {
  console.log("Por favor, insira valores numéricos válidos.");
} else {
  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      if (valor2 === 0) {
        console.log("Divisão por zero não é permitida.");
      } else {
        resultado = (valor1 / valor2).toFixed(2);
        sobra = valor1 % valor2;
      }
      break;
    default:
      console.log("Operador inválido. Use +, -, *, ou /.");
  }

  if (operador === "/" && valor2 !== 0) {
    document.write(`Resultado: ${resultado} Sobrando: ${sobra}`);
  } else if (operador !== "/") {
    document.write(`Resultado: ${resultado}`);
  }
}
