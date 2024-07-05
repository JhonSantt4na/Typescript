"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Azul"] = 3] = "Azul";
        Cores[Cores["Prata"] = 4] = "Prata";
    })(Cores || (Cores = {}));
    ;
    class Carro {
        nome;
        cor;
        motor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get nomecarro() {
            return this.nome;
        }
        get carroligado() {
            return this.motor.liga ? "Sim" : "Não";
        }
        get minhaPot() {
            return this.motor.pot;
        }
    }
    Veiculos.Carro = Carro;
    class carroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300), 2);
        }
    }
    Veiculos.carroEsportivo = carroEsportivo;
    class carroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), 2);
        }
    }
    Veiculos.carroPopular = carroPopular;
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
const carro1 = new Veiculos.carroEsportivo("Rapiddo", 2);
const carro2 = new Veiculos.carroPopular("NUsze", 0);
carro1.ligar();
carro2.ligar();
console.log(`Nome....: ${carro1.nomecarro}`);
console.log(`Cor.....: ${carro1.minhaCor}`);
console.log(`Potencia: ${carro1.minhaPot}`);
console.log(`Ligado..: ${carro1.carroligado}`);
console.log(`-----------------------------`);
console.log(`Nome....: ${carro2.nomecarro}`);
console.log(`Cor.....: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.minhaPot}`);
console.log(`Ligado..: ${carro2.carroligado}`);
console.log(`-----------------------------`);
