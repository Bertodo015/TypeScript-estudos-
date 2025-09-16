import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
    RA: number;

    constructor (nome: string, email: string, telefone: number, RA: number){
        super(nome, email, telefone);

        this.RA = RA;
    }

    saudacaoEstudante() {
        console.log(`Olá, sou ${this.nome} e meu RA é ${this.RA}`);
    }
}
