// Herança quando tenho uma classe que herda caracteristicas de outra classe.
// Classe pai com metodos e padroes 
// criamos a classe filho com as mesmas caracteristicas mas com algumas modificações

// CLASSE PAI
// Por boa pratica sempre classe comerça com letra maiusculas
class ContaBancaria{
    public numero:number;
    public titular:string;
    // numero e titular são diferente pois estão em escopos diferentes
    constructor(numero:number, titular:string){
        this.numero = numero;
        this.titular = titular;
    }
}
// CONTA FILHO 
// Precisamos criar as Contas juridicas e Contas fisicas
// Vamos aproveitar o que temos em ContaBancaria.

// ContaPF Herdando a ContaBancaria = Tudo que tem la tem aqui
class ContaPF extends ContaBancaria{
    // Os atributos da classe pai ja é encorporado
}

// ContaPJ Herdando a ContaBancaria = Tudo que tem la tem aqui
class ContaPJ extends ContaBancaria{
    // Os atributos da classe pai ja é encorporado
}


// Já funciona sem ter nenhum metodo pois na classe pai ja tem
const conta1 = new ContaPF(2153435153, "Jhon");
const conta2 = new ContaPJ(4145445451, "Santt4na");
