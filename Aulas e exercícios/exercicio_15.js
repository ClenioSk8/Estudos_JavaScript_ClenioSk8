const pessoa = {
    nome: "Clênio Everson",
    salario: 750, 
    idade: 28,         
    possuiDiploma: true 
  };
  
  // Exibindo os dados da pessoa
  console.log("Nome: " + pessoa.nome + " - tipo " + typeof pessoa.nome)
  console.log("Salário: R$" + pessoa.salario+ " - tipo " + typeof pessoa.salario) 
  console.log("Idade: " + pessoa.idade + " anos"+ " - tipo " + typeof pessoa.idade)
  console.log("Possui Diploma: " + (pessoa.possuiDiploma ? "Sim" : "Não") + " - tipo " + typeof pessoa.possuiDiploma)
