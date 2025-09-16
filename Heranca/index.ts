import { Pessoa } from "./Pessoa";
import { Estudante } from "./Estudante";

const pessoa1 = new Pessoa("Aderbal Sauro", "aderbal@email.com", 987654321);
pessoa1.saudacao();

const pessoa2 = new Estudante("Silva Sauro", "aderbal@email.com", 987654321, 12365);
pessoa2.saudacaoEstudante();