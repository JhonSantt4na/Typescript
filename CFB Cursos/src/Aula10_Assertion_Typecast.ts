// Type Assertion e TypeCast 
// Type Assertion = Afirmação de tipo, quando temos que afirma q um tipo desconhecido é conhecido
// TypeCast = converter um tipo para o outro

let num_valor:number;
let str_uvalor:string;
let unk_valor:unknown;

unk_valor = 10;
// num_valor = unk_valor;
// retorna um erro pois não conseguimos fazer associação direta a não ser que faça uma afirmação de tipo

// Afirmação de Tipo
num_valor = <number> unk_valor; // typeAssertion
str_uvalor = <string> unk_valor;
str_uvalor+=10; // Return 10 ele não concatena pois não é uma string

console.log(typeof(unk_valor)); // Foi convertido para number mas original é desconhecido
console.log(unk_valor);

console.log(typeof(num_valor)); // Retorna um number pois foi associado a number
console.log(num_valor);

console.log(typeof(str_uvalor));
console.log(str_uvalor);
// Porem tudo isso não é uma converção 

// Convertendo para numero
const svalor = "20";


num_valor = Number.parseFloat(svalor);
//ou 
num_valor = Number.parseInt(svalor);

console.log(num_valor);

// Convertendo de Number para String
const nvalor = 10

// str_uvalor = Number.toString(nvalor) // como ele já é numero faz o outro
 
str_uvalor = nvalor.toString();


