"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 250);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(cilindros, potencia, turbo) {
            this.potencia = potencia + (turbo ? turbo.pot : 0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get pot() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get pot() {
            return this.potencia;
        }
    }
})(Motores || (Motores = {}));
const carro1 = new Veiculos.Carro("Rapiddo");
console.log(carro1.motor);
