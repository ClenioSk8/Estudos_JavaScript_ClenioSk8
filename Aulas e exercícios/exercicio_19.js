const Banco = {
    numeroConta: "905467",
    saldo: 10000,
    tipoConta: "Corrente",
    agencia: "Agência Marcos Freire",

    buscarAgencia: function(){
        return this.agencia
    },
  
    buscarSaldo: function () {
      return this.saldo;    },
  
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;      } else {
        return "Valor de depósito inválido. O valor deve ser maior que zero.";
      }
    },
  
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;        return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;      } else if (valor <= 0) {
        return "Valor de saque inválido. O valor deve ser maior que zero.";      } else {
        return "Saldo insuficiente para realizar o saque.";      }
    },
  
    numeroDaConta: function () {
      return this.numeroConta;  
    },
  };
  
  // Exemplos de uso das funções/métodos
  console.log(Banco.buscarAgencia())
  console.log("Número da Conta:", Banco.numeroDaConta());  console.log("Saldo Atual:", Banco.buscarSaldo());  
  console.log(Banco.deposito(500));
  console.log(Banco.saque(200));  
  console.log(Banco.saque(2000)); 
  console.log(Banco.deposito(3900));  