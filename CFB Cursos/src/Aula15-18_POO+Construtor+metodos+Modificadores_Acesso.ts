// Programação orientada a Objecto
// Criamos uma classe o molde do objeto 
// e com isso podemos criar varios objetos independentes seguindo as instruções da classe
class computador{
    // sempre operamos os objetos e não a classe
    // Vamos criar os modelos 
    
    // Parametros = variavel dentro da classe so funciona dentro da classe 
        private id:number = 0;
        public nome:string = "";   // posso colocar public ou deixar sem pois é o padrão 
        private ram:number = 0;    
        private cpu:number = 0;
        private ligado:boolean = false;

    // Construtor = Automaticamente chamada quando criar um objecto
    // Java, c#, c = o construtor tem o mesmo nome que a classe
    // js tem a wordkey constructor
    constructor(nome:string,ram:number,cpu:number,ligado:boolean=false){
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }

    // Criando metodos =  são funções das classes
   
    // Metodo de Informações
    // Void não retorna nada
    info():void{
        console.log(`Nome: ${this.nome}`)
        console.log(`Ram:  ${this.ram}`)  
        console.log(`Cpu: ${this.cpu}`)
        console.log(`Ligado: ${this.ligado?"sim":"Não"}`)    // Usando If ternario => condição?verdade:falso
        console.log("_______________")
        }
    
    // Metodo de ligar e desligar

    ligar():void{
        this.ligado = true; // Quando chamar o metodo ligar ele deixa o parametro ligado com true
    }
    desligar():void{
        this.ligado = false; // Quando chamr o parametro ligado vai para falso
    }


    // Modificadores de Acesso ( Public, Private, Protected)
    
    // Public = Publico, Padrão que pode ser acessado de qualquer lugar (dentro da classe, fora ou por filhos)
    // Com isso posso mudar o nome sempre que eu quiser por fora da clase ex: linha 68/73

    // Private = Privado, Usase o private antes do nome do parametro linha 12
    // podemos mudar por dentro da clase e por fora so com metodos que criarmos na classe
    // ex: linha 94/103
    upRam(qtd:number):void{
        // Fazendo o tratamento para não poder negativos e igual a zero
        if(qtd >= 0 && qtd <= 1000){
            this.ram = qtd
        }else{
            console.log(`Quantidade ${qtd} para o computador ${this.nome} não é permitida`);
        }
        
    } // Ultilizando na linha = 116-118 
    // Protected = Protegido, não muda por fora da classe mas mudamos por classes filhas com as heranças
}

// Intanciar  = Criando objetos da classe computador
// Se tiver na classe um contrutor automaticamente rodara ele
const computador1 = new computador("Rapido",32, 255);
const computador2 = new computador("Caro",64, 500);
const computador3 = new computador("Gamer",128, 450);


// São independentes 
// Mudando os nomes de cada um 
// Mudando os nome pois são publicos
    // computador1.nome = "Rapido" 
    // computador2.nome = "Caro"
    // computador3.nome = "Gamer"


// Usando os parametros 
    // console.log(computador1);
    // console.log(computador2);
    // console.log(computador3);
// podemos pegar os parametros com o .parametro exemplo
    // console.log(computador1.nome);
    // console.log(computador2.ram);
    // console.log(computador3.cpu);

// Usando o metodo info();

    // computador1.info();
    // computador2.info();
    // computador3.info();

// Usando metodos privados    
// Ligando pc 1 e 3 

computador1.ligar();
computador3.ligar();

// Desligando o 1 e 3, Ligando o 2
computador1.desligar();
computador3.desligar();
computador2.ligar();

// Mostrando que agora ele estão ligado
    // computador1.info();
    // computador2.info();
    // computador3.info();

// Usando o metodo privado de upgrade de ram
computador3.upRam(-5);
console.log(computador3.info());