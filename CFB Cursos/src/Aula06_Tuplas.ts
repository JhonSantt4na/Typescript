// O typescript tras o conceito de Tupla para o js
// Tupla = Array onde podemos definir tipos especificos para possiçoes especificas dentro do array

//let coisas:(number|string)[]= [20,15,35,41,"texte"];
// porem nao colocamos em qual indice fica a string ou o number

// usando tuplas
let coisas:[string,number,boolean]=["corda",10,true];  // Na mesma ordem que foi definida srting, number caso contrario erro
// Podendo ser qualquer tipo de dados

// podemos mudar os valores
coisas[2]=false;




// podemos adicionar com o push ex:
coisas.push("KitMedico",5,true);
console.log(coisas);
// Nesse caso ele nos retorna todos esses itens porem 
// se declaramos somente 3 de tamanho, nao podemos adicionar mais que isso

// Alem disso podemos declarar somente leitura para qualquer variaveis
// let coisas:readonly[tipos]=[valores]
// retornando um erro pois tentamos adicionar itens com o push
// Pois remove todos os metodos
// ate mesmo auterar o valor ex: coisas[2] = true  Return um erro pois e somente leitura


console.log(coisas[0]);
console.log(coisas[1]);
console.log(coisas[2]);

// Js trata como array e nao existe o conceito de readonly
