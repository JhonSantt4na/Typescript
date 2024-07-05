"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coisas = exports.objeto = exports.Pessoa = void 0;
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.Pessoa = Pessoa;
class objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.objeto = objeto;
exports.Coisas = ["Pessoas", "Novidade", "Numero"];
