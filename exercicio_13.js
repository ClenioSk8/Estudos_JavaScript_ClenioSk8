// Inicialização dos votos
let votosCandidatoX = 0;
let votosCandidatoY = 0;
let votosCandidatoZ = 0;
let votosBrancoNulo = 0;

// Função para verificar se o voto é válido
function validarVoto(voto) {
  if (voto === 889) {
    votosCandidatoX++;
  } else if (voto === 847) {
    votosCandidatoY++;
  } else if (voto === 515) {
    votosCandidatoZ++;
  } else if (voto === 0) {
    votosBrancoNulo++;
  } else {
    console.log("Voto inválido. Vote novamente.");
  }
}

// Loop para coletar os votos até que a votação seja finalizada
let votacaoFinalizada = false;
while (!votacaoFinalizada) {
  const voto = parseInt(prompt("Digite o número do candidato (889 para X, 847 para Y, 515 para Z, 0 para branco, ou outro valor para sair):"));
  if (!isNaN(voto)) {
    validarVoto(voto);
  } else {
    console.log("Entrada inválida. Vote novamente.");
  }

  const finalizar = prompt("Deseja finalizar a votação? (S para sim, qualquer outra tecla para continuar)");
  if (finalizar.toUpperCase() === "S") {
    votacaoFinalizada = true;
  }
}

// Determinar o vencedor
let vencedor = "";
let maiorNumeroDeVotos = 0;

if (votosCandidatoX > maiorNumeroDeVotos) {
  vencedor = "Candidato X";
  maiorNumeroDeVotos = votosCandidatoX;
}
if (votosCandidatoY > maiorNumeroDeVotos) {
  vencedor = "Candidato Y";
  maiorNumeroDeVotos = votosCandidatoY;
}
if (votosCandidatoZ > maiorNumeroDeVotos) {
  vencedor = "Candidato Z";
  maiorNumeroDeVotos = votosCandidatoZ;
}

// Exibir resultados
document.write("Resultado da votação:");
document.write("Candidato X: " + votosCandidatoX + " votos <br>");
document.write("Candidato Y: " + votosCandidatoY + " votos <br>");
document.write("Candidato Z: " + votosCandidatoZ + " votos <br>");
document.write("Votos em branco/nulos: " + votosBrancoNulo + " votos <br>");
document.write("O vencedor é: " + vencedor + " com " + maiorNumeroDeVotos + " votos. <br>");
