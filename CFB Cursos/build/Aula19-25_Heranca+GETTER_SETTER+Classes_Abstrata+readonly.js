"use strict";
class ContaBancaria {
    numero;
    titular;
    saldo;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular : ${this.titular}`);
        console.log(`Numero : ${this.numero}`);
    }
    get versaldo() {
        return this.saldo;
    }
    set versaldo(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor Infalido");
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("Valor Invalido");
            return;
        }
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo Insuficiente");
        }
    }
}
class ContaPF extends ContaBancaria {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("Tipo : Conta Pessoa Fisica");
        super.info();
        console.log(`CPF : ${this.cpf}`);
        console.log(`__________________`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor de Deposito Exedeu o Limite");
        }
        else {
            super.deposito(valor);
            console.log(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("Valor de Saque Exedeu o Limite");
        }
        else {
            super.saque(valor);
            console.log(valor);
        }
    }
}
class ContaPJ extends ContaBancaria {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo : Conta Pessoa Juridica`);
        super.info();
        console.log(`CNPJ : ${this.cnpj}`);
        console.log(`__________________`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("Valor de Deposito Exedeu o Limite");
        }
        else {
            super.deposito(valor);
            console.log(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("Valor de Saque Exedeu o Limite");
        }
        else {
            super.saque(valor);
            console.log(valor);
        }
    }
}
const conta1 = new ContaPF("Jhon", 45613146547);
const conta2 = new ContaPJ("Santt4na", 6546425456585);
conta1.deposito(500);
conta1.saque(200);
console.log(conta1.versaldo);
