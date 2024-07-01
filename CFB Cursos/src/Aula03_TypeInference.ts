// Tipagem do js

//let nome="jhony";
// variavel ja existe no Aula02 returna um erro 

let nome1 = "jhony";

// ts ja indentifica como string e se colar outro tipo de dados ele retorna erro
// nome1 = 100; retorna um erro

let valor = 100; // tipo Number ( int, float, bin. hex ) 

// Declarando um variavel sem valor 
let carro; // nesse caso ja define como tipo any
// any = qualquer coisa, sendo nada interessamte pois vamos para com o conceito do ts
carro = "corsa"

// criar uma variavel com o tipo que agente quer 
let moto:string;    // Ou seja ele apartir disso ele so recebe string
moto = "Xre"

console.log(moto);
console.log(carro);
console.log(valor);
console.log(nome1);
