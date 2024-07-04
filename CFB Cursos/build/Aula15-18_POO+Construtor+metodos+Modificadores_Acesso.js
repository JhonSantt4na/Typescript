"use strict";
class computador {
    id = 0;
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu, ligado = false) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram:  ${this.ram}`);
        console.log(`Cpu: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "sim" : "Não"}`);
        console.log("_______________");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtd) {
        if (qtd >= 0 && qtd <= 1000) {
            this.ram = qtd;
        }
        else {
            console.log(`Quantidade ${qtd} para o computador ${this.nome} não é permitida`);
        }
    }
}
const computador1 = new computador("Rapido", 32, 255);
const computador2 = new computador("Caro", 64, 500);
const computador3 = new computador("Gamer", 128, 450);
computador1.ligar();
computador3.ligar();
computador1.desligar();
computador3.desligar();
computador2.ligar();
computador3.upRam(-5);
console.log(computador3.info());
