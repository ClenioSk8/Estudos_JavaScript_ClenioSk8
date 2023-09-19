class Investidor {
    constructor() {
        this.nomeUsuario = "";
        this.idadeUsuario = 0;
        this.rendaMensal = "";
        this.profissao = "";
        this.formacao = "";
        this.aporteMensalRendaFixa = 0;
        this.aporteMensalRendaVariavel = 0;
        this.taxaSelic = 13.25; // Taxa Selic atual (5% ao ano)
        this.tempoInvestimento = 0; // Tempo de investimento em anos
    }

    capturarDadosUsuario() {
        this.nomeUsuario = prompt(`Digite seu nome: `);
        // this.idadeUsuario = parseInt(prompt(`${this.nomeUsuario}, digite iuuuiuiusua idade: `));
        // this.rendaMensal = parseFloat(prompt(`${this.nomeUsuario}, digite sua renda mensal: `));
        // this.profissao = prompt(`${this.nomeUsuario}, digite sua profissão: `);
        // this.formacao = prompt(`${this.nomeUsuario}, digite sua formação acadêmica: `);
        this.aporteMensalRendaFixa = parseFloat(prompt(`${this.nomeUsuario}, digite o valor investindo mensalmente em renda fixa: `));
        this.tempoInvestimento = parseInt(prompt(' quanto tempo pretende investir ? '))
        // this.aporteMensalRendaVariavel = parseFloat(prompt(`${this.nomeUsuario}, digite o valor investindo mensalmente em renda variável: `));
    }

    calcularRentabilidade() {

        const total_investido = (this.tempoInvestimento * this.aporteMensalRendaFixa.toFixed(2))
        const total_rentabilidade = (this.aporteMensalRendaFixa * this.tempoInvestimento) / 100 * 13.25
        const acumulado_final = total_investido + total_rentabilidade
        if(acumulado_final > 10000){
            console.log(acumulado_final-5000)
           
        }



        return {
            nomeUsuario: this.nomeUsuario,
            idadeUsuario: this.idadeUsuario,
            rendaMensal: this.rendaMensal,
            profissao: this.profissao,
            formacao: this.formacao,
            aporteMensalRendaFixa: this.aporteMensalRendaFixa,
            aporteMensalRendaVariavel: this.aporteMensalRendaVariavel,
            total_investido,
            total_rentabilidade,
            acumulado_final,

           


        };
    }

    imprimirInformacoes() {
        const infoInvestimentos = this.calcularRentabilidade();
        console.log("Informações do Investidor:");
        console.log(infoInvestimentos);
           
    }
}
// Criar um objeto Investidor e capturar os dados do usuário
const investidor = new Investidor();
investidor.capturarDadosUsuario();

// Calcular e imprimir as informações de rentabilidade
investidor.imprimirInformacoes();
