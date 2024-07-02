// Herança quando tenho uma classe que herda caracteristicas de outra classe.
// Classe pai com metodos e padroes 
// criamos a classe filho com as mesmas caracteristicas mas com algumas modificações

// Public Ultiliza-ze em : Todos os Lugares
// Private Ultiliza-ze em : Propria Classe
// Protected Ultiliza-ze em : Propria Classe + Classe Filho

// Metodos GETTER = Para obter algo da classe
// Metodos SETTER = Para modificar algo da classe




// CLASSE PAI
// Por boa pratica sempre classe comerça com letra maiusculas
// Abstract = não pode criar objetos, ou seja serve somente de modelo e para herdar para os filhos
abstract class ContaBancaria{

    // Parametros com Protected Para as Classes Filhos ter acessso a eles : Protected
    // readonly = Uma vez atribuida não pode mais mudar o numero 
    private readonly numero:number;
    protected titular:string;
    private saldo:number;

    // numero e titular de cima, são diferente do que esta dentro dos parametros
    // do construtor pois estão em escopos diferentes.
    
    constructor(titular:string){
        this.numero = this.gerarNumeroConta(); // chamando o gerador de numero de conta
        this.titular = titular;
        this.saldo = 0;
    }

    // Metodo para Gerar numero da conta: Private
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1; 
    // (Parteinteira(gerar um n aleatorio * ate ?)+1 para não ser 0);
    }


    // Metodo Para informações da conta : Publico 
    public info(){
        console.log(`Titular : ${this.titular}`)
        console.log(`Numero : ${this.numero}`)  
    }

    // Metodo Saldo Para retornar um valor : Public com GETTER
    // get = Usamos como se fosse propriedades e não funções
    public get versaldo():number{
        return this.saldo
    }
    
    // Metodo Para mudar o saldo : private com SETTER
    // Mesmo sem fazer sentido para o nosso banco so para agente saber como faz
    private set versaldo(saldo:number){ // precisa de um parametro de entrada
        this.saldo = saldo
    }




    // Metodos de Deposito // Somente Classe Filho
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor Infalido");
            return
        }
        this.saldo += valor;
    }

    // Metodos de Saque  // Somente Classe Filho
    protected saque(valor:number){
        if(valor < 0){
            console.log("Valor Invalido");
            return
        }
        if(valor <= this.saldo){
            this.saldo -= valor;
        }else{
            console.log("Saldo Insuficiente");
        }      
    }

}

// CONTA FILHO 
    //  Precisamos criar as Contas juridicas e Contas fisicas
    // Vamos aproveitar e herdar metodos e parametros da ContaBancaria.


// ContaPF Herdando a ContaBancaria.
class ContaPF extends ContaBancaria{
    // Os atributos da classe pai ja é encorporado.
    cpf:number; 

    constructor(titular:string,cpf:number){
        // Pegando os Parametros do contrutor (Titular e Numero)
        super(titular) // Super se refere a o construtor da Classe Pai (Ele so espera o Titulars).
        this.cpf = cpf;
            // console.log(`Conta PF Criada: ${titular}`) // Conseguimos acessar se o pai estiver Public caso contrario
        // OBS: se agente colocar o super(titular) não funciona mas nao da erro pois o super tem acesso ao construtor da classe pai e la espera um numero e não retorno de nada 
        // this.info(); = Ele funciona porem precisamos mostra o cpf ou o cnpj
    }
    // Metodo de Info PF
    info(){
        console.log("Tipo : Conta Pessoa Fisica")
        super.info(); // Usamos o info da Classe Pai e Adicionamos o CPF
        console.log(`CPF : ${this.cpf}`);
        console.log(`__________________`)
    }
    // Metodo Deposito PF
    public deposito(valor: number): void {
        if(valor > 1000){
            console.log("Valor de Deposito Exedeu o Limite")
        }else{
            super.deposito(valor);
            console.log(valor)
        }
    }
    // Metodo Saque PF
    public saque(valor: number): void {
        if(valor > 1000){
            console.log("Valor de Saque Exedeu o Limite")
        }else{
            super.saque(valor);
            console.log(valor)
        }
    }


}

// ContaPJ Herdando a ContaBancaria
class ContaPJ extends ContaBancaria{
    // Os atributos da classe pai ja é encorporado
    cnpj:number; 

    constructor(titular:string,cnpj:number){
         // Pegando os Parametros do contrutor (Titular e Numero)
        super(titular) // Super se refere a o construtor da Classe
        this.cnpj = cnpj;
            // console.log(`Conta PJ Criada: ${titular}`) // Conseguimos acessar o pai se o pau estiver Public caso contrario
        // OBS: se agente colocar o super(titular) não funciona mais não da erros pois o super tem acesso ao contrutor da classe pai e la espera um numero e não retorno de nada 
    }

    // Metodo de Info PJ
    info(){
        console.log(`Tipo : Conta Pessoa Juridica`)
        super.info(); // Chamamos a info da Classe Pai e Adicionamos o CNPJ
        console.log(`CNPJ : ${this.cnpj}`);
        console.log(`__________________`)
    }

    // Metodo de Deposito PJ

    public deposito(valor: number): void {
        if(valor > 10000){
            console.log("Valor de Deposito Exedeu o Limite")
        }else{
            super.deposito(valor);
            console.log(valor)
        }
    }

    // Metodo de Saque PJ
    public saque(valor: number): void {
        if(valor > 10000){
            console.log("Valor de Saque Exedeu o Limite")
        }else{
            super.saque(valor);
            console.log(valor)
        }
    }

}

// Podemos Criar quantas pessoa quiser
const conta1 = new ContaPF("Jhon", 45613146547);
const conta2 = new ContaPJ("Santt4na", 6546425456585);
// Nada impede que eu crie uma conta com a classe pai
    // const conta3 = new ContaBancaria("Klark") Transformando ela em classe abstrata

// conta1.info();
// conta2.info(); 

conta1.deposito(500);
conta1.saque(200);

console.log(conta1.versaldo);