// modulaçao Precisamos exportar a class
// posso exporta usando :
// diretamente no conteudo com o export antes do nome class
// pode exportar (Array, funções, objeto literal);

export class Pessoa{
    nome:string
    altura:number
    constructor (nome:string, altura:number){
        this.nome = nome 
        this. altura = altura
    }
}

export class objeto{
    nome:string
    constructor(nome:string){
        this.nome = nome;
    }
}

export const Coisas = ["Pessoas", "Novidade", "Numero"]

// Para exportar varios de uma vez usamos a seguinte sintase 
    // export{coisas, Pessoas, Objetos}

// para o pessoa ser o padrão de exportação
    // export default Pessoa 
    // com isso muda a importação