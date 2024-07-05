// GENERICS Usamos em funções, classes ...
// Basicamente é um componente que pode funcionar com varios tipos 

    // function f_teste(v:number):number{
    //     return v
    // }
    // console.log(f_teste(12));

// caso eu queria que essa função retorne uma string vamos ter que
// mudar os parametros da criação da função 
// podemos usar o any como parametro e o any como retorno 
    // function f_teste(v:any):any{
    //     return v
    // }
    // // o tipo que passar ele retorna
    // console.log(f_teste(12));

// Generics sem o any 


    // function f_teste<T>(valor:T):T{
    //     return valor
    // }
    // console.log(f_teste<number>(12));

// ou seja so mudar o tipo e usamos a função com qualquer valor 
// desde que eu informe o tipo 

// se for trabalhar com mais de 1 coloca outras letras
function f_testte<T,U>(valor:T, r:U):U{
    // Preciso retornar algo do tipo U, atribuindo ao r o tipo U
    return r
}
console.log(f_testte<number,string>(12, "Como"));

class C_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}
// basta eu mudar o generic e o valor que posso usar a classe normalmente
const ct1 = new C_teste<number>(55);
console.log(ct1.valor);