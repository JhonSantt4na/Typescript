// NULL = Nulo (é um valor, porem nulo);
let apelido:string|null; //Já que não podemos definir a variavel sem nenhum valor 
apelido=null // Usamos o null, não esta vazio tem o tipo nulo
console.log(apelido)

// UNDEFINED = Indefinido (variavel sem valor)
// é quando não tem nenhum valor a variavel
let vnome2; // return tipo any, com o valor indefinido pois não tem nenhuma atribuição ou associação pra ela
console.log(vnome2);

// UNKNOWN = Desconhecido  (tipo desconhecido, mesmo com valor numero)
// Mesmo tendo um valor numero ele não tem tipo number
// unknown pode receber qualquer coisa por ser desconhecido 
// ultilizamos quando não sobemos o tipo de dado que uma função retorna
// So pode ser atribuido em tipos unknown ou any

let vnome3:unknown = 10;
let varnum = vnome3; // se atribuir automaticamente varnum recebe tipo desconhecido tmb, mas se varnum tiver um tipo da erro
console.log(vnome3);


