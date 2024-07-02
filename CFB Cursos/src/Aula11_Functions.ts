// Temos que colocar os tipos dos parametros 
// e tipos do retorno

// Void = quando não retorna nada
function testet():void{
    console.log("Texte")
}

testet();
testet();

// Função parametrizada

function logar(user:string, password:string):void{
    console.log(`Usuario ${user} Logado com a Senha: ${password}`)
}

//Chamando a função com parametros
logar("Jorge", "12345"); // ordem dos valores segue a ordem dos parametros

// Função que recebe parametro e retorna outro 
function soma(numero1:number, numero2:number):number{
    let somando:number = numero1 + numero2; 
    return somando
}

// Ja que ela retorna algo temos que chamar ou dentro de uma variavel 
// ou no console.log

console.log(soma(10,20));

const resultadoSoma = soma(25,25); // recebe o mesmo tipo que a função retorna
console.log(resultadoSoma);

// variavel string recebendo o  valor number da função
let resultadostring:string = soma(10,10).toString();   // tostring é do Number 
console.log(resultadostring);
