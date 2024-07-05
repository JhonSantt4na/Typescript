// Namespace = estrutura organazional
// agrupar elementos de tipos em um espaco de tipos especificos

namespace Veiculos{
    // com o enum cada cor  tem o seu indice
    enum Cores{"Preto","Branco","Vermelho", "Azul", "Prata"};
    // Tudo que for relacionado estara aqui 
    // export para poder usar fora de namespace
    export abstract class Carro{
        private nome:string;
        private cor:string
        private motor:Motores.Motor
        constructor(nome:string,motor:Motores.Motor, cor:Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        public ligar(){
            this.motor.liga=true;
        }
        public desligar(){
            this.motor.liga=false;
        }
        get minhaCor(){
            return this.cor;
        }
        get nomecarro(){
            return this.nome;
        }
        get carroligado(){
            return this.motor.liga?"Sim":"Não"
        }
        get minhaPot(){
            return this.motor.pot;
        }
        // Como é abstrata não conseguimos criar um  novo carro, so serve para ser herdado
    }
    export class carroEsportivo extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome,new Motores.Motor(6,300), 2)
        }
    }
    export class carroPopular extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome,new Motores.Motor(3,100), 2)
        }
    }
}





namespace Motores{
    // tudo de motor está aq
    export class Motor{
        private ligado:boolean
        private cilindros:number
        private potencia:number;
        // podemos usar o turbo pois esta no mesmo namespace
        constructor(cilindros:number, potencia:number, turbo?:Turbo){
            this.potencia = potencia + (turbo?turbo.pot:0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set liga(ligado:boolean){
            this.ligado = ligado
        }
        get liga(){
            return this.ligado
        }
        get pot(){
            return this.potencia
        }
    }
    // não funciona para ultilizar fora do motor
    class Turbo{
        private potencia:number;
        constructor(potencia:number){
            this.potencia = potencia
        }
        get pot(){
            return this.potencia
        }
    }
}

const carro1 = new Veiculos.carroEsportivo("Rapiddo",2);
const carro2 = new Veiculos.carroPopular("NUsze",0);

carro1.ligar();
carro2.ligar();

console.log(`Nome....: ${carro1.nomecarro}`)
console.log(`Cor.....: ${carro1.minhaCor}`)
console.log(`Potencia: ${carro1.minhaPot}`)
console.log(`Ligado..: ${carro1.carroligado}`)
console.log(`-----------------------------`)
console.log(`Nome....: ${carro2.nomecarro}`)
console.log(`Cor.....: ${carro2.minhaCor}`)
console.log(`Potencia: ${carro2.minhaPot}`)
console.log(`Ligado..: ${carro2.carroligado}`)
console.log(`-----------------------------`)