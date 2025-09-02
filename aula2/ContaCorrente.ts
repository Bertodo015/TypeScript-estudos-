import { Conta } from "./Conta";

// Classe ContaCorrente herda tudo de Conta
// Classe ContaCorrente herda é filha de Conta
// Classe ContaCorrente é subclasse de Conta (superclasse)
export class ContaCorrente extends Conta{

    // Assumindo que imprimirExtrato de CC custa R$1,00
    imprimirExtrato(): void {
        const taxaImpressaoExtrato = 1;
        if (this.saldo < taxaImpressaoExtrato) {
            console.log("[ERRO]: saldo insuficiente para impressão");
        } else {
            this.saldo -= taxaImpressaoExtrato;
            console.log(`Saldo atual: R$${this.saldo}`);
        }
    }
}