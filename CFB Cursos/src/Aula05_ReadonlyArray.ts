// Podemos Declarar assim : 
let numeros:Array<number> = [20,30,40];
// com union
// let numeros:Array<number|string> = [20,30,40];

// Adicionado
numeros.push(50); // Adiciona no final
numeros.unshift(10); // Adiciona no inicio
// Removendo
numeros.pop(); // Removendo do final
numeros.unshift(); // Removendo do inicio

console.log(numeros);

let numeros_rd:ReadonlyArray<number> =[100,200,300];
// com isso so funciona como leitura e nao conseguimos adicionar mais itens 
// removendo os metodos que podem auterar os elementos do array pelo fato dele ser somente de leitura
// metodos funciona mais nao podemos modificar os arrays
console.log(numeros_rd);