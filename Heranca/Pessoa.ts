export class Pessoa {
    nome: string;
    email: string;
    telefone: number;

    constructor (nome: string, email: string, telefone: number) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    saudacao() {
        console.log(`Olá, sou o ${this.nome}`);
    }
}