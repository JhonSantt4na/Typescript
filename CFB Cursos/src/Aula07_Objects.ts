// Object = são variaveis ou funções 
// Pode receber qualquer tipo de dados
let dados/*:object*/ = { // sem o tipo object ele entende com a sintaxe usada
    nome:"JhonnDev", // O tipo da chave vem com a atribuição automatica
    idade: 25,  
    status : "Ativo",
    ola:()=>{console.log("Oii")},
    info:(p:string)=>{console.log(p)}
} 
dados.nome = "Santt4na";
console.log(typeof(dados))
console.log(dados.nome); // se for com o dados:object não funciona na linha 3

dados.ola();
dados.info(dados.nome);

// Muitas vezes usamos o object pra passar conteudo para uma função
// Passando varios dados com uma unica atribuição
// porem dados não podem ser um tipo;