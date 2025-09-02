import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";

const conta1 = new Conta(12345, "Aderbal da Silva Sauro", 50);
conta1.imprimirExtrato();
conta1.depositar(200);
conta1.sacar(50);
conta1.imprimirExtrato();

const contaCC = new ContaCorrente(321, "Adrastéia", 100);
contaCC.imprimirExtrato();
contaCC.imprimirExtrato();
