export class Conta {
    // Atributos, características
    numero: number;
    saldo: number;
    cliente: string;

    constructor(numero: number, cliente: string, saldo?: number) {
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo ?? 0;    // this.saldo = saldo || 0;
    }

    // Métodos, ações
    depositar(valor: number): void{
        if (valor <= 0) {
            console.log("[ERRO]: valor deve ser positivo");
        } else {
            this.saldo += valor;
            console.log("[SUCESSO]: depósito realizado");
        }
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("[ERRO]: saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log("[SUCESSO]: saque realizado");
        }
    }

    imprimirExtrato(): void {
        console.log(`Saldo atual R$${this.saldo}`);
        
    }
}
