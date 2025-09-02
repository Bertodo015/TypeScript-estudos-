function soma (a: number, b: number) {
    return a + b;
}

console.log(soma(1,2));

import { log } from "console";
import { Contato } from "./models/Contato";

const contato1: Contato = {
    nome: 'Aderbal',
    fone: '67999999999',
    email: 'email@email',
    dataNasc: new Date("1990-02-10")
};

console.log(contato1);

const contato2: Contato = {
    nome: 'Adrastéia',
    fone: '67999999999'
};

console.log(contato2);


const vetor1: number[] = [];
const vetor2: Array<number> = [];

vetor1.push(158);
vetor1.push(-154);
vetor1.push(5483);
console.log(vetor1);

const vetor3: Array<any> = ['Olá', 'Aderbal', 189451];
console.log(vetor3);

const tupla: [string, number] = ['semestre', 3];
console.log(tupla);

const contatos: Contato[] = [];
contatos.push(contato1);
console.log(contatos);
