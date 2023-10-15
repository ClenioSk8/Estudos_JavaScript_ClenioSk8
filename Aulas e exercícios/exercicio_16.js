const notas = [];

for (let i = 1; i <= 3; i++) {
  let nota;

  do {
    nota = parseFloat(prompt(`Digite a nota ${i} (entre 0 e 10):`));

    if (nota < 0 || nota > 10 || isNaN(nota)) {
      console.log("Por favor, insira uma nota válida (entre 0 e 10).");
    }
  } while (nota < 0 || nota > 10 || isNaN(nota));

  notas.push(nota);
}

const soma = notas.reduce((total, nota) => total + nota, 0);
const media = soma / notas.length;

document.write("A média das notas é: " + media.toFixed(2));
