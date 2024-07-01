class Curso{
    // Fica reclamando se nao especificar as const antes.
    canal = null;
    curso = null;
    constructor(canal:any,curso:any){
        this.canal = canal;
        this.curso = curso;
    }
}
// Criando um novo curso 
let c1 = new Curso("CFB Cursos", "Typescript");

console.log(c1.canal);
console.log(c1.curso);

// Da uma olhada no padrao do JS
// Ele usa uma verçao ultrapassada

// var Curso = /** @class */ (function () {
//     function Curso(canal, curso) {
//         // Fica reclamando se nao especificar as const antes.
//         this.canal = null;
//         this.curso = null;
//         this.canal = canal;
//         this.curso = curso;
//     }
//     return Curso;
// }());

// Para gerar com mais atualizado 
// tsc Aula02.ts --target "ES2016"  
// tsc Aula02.ts --target "ESNEXT" // Para pegar a ultima versao do js

//retorno

// //class Curso {
//     constructor(canal, curso) {
//         this.canal = null;
//         this.curso = null;
//         this.canal = canal;
//         this.curso = curso;
//     }
// }
// 
// let c1 = new Curso("CFB Cursos", "Typescript");
// console.log(c1.canal);
// console.log(c1.curso);

// Apagando o Aula02.js para fazer de uma maneira melhor
// Usando o comando tsc, ele retorna tudo que podemos fazer
// mais so retorna pq nao temos arquivos de configuraçao

// Criar Arquivo de config = tsc --init
// dai conseguimos compilar ja nas configuraçoes definidas

// Ele gera um aquivo tsconfig.json 
// Ja vem retornando um erro pois ele ja esta usando algumas configuracoes do arquivo 

// vamos adicionar na linha 5 os tipos dos dados do nosso constutor para evitar o erro (canal:any,curso:any);
// any = tipo de dado (qualquer coisa)

// Dentro do tsconfig

// "target": "ESNext" = para sempre execultar a ultima versao

// o que esta comentado nao esta funcionado, caso queira basta descomentar
// Vamos descomentar :

// "removeComments": true, = para toda vez que compilar ele remover os comentarios do js

// "outDir": "./build", = Aonde vai ser gerado os arquivos de saida do ts
// obs: vamos criar uma pasta build e todos os arquivos js vao pra ela

// "rootDirs": ["./src"] = Onde fica os arquivos typescript
// array pq podemos especificar varios
// obs: vamos criar uma pasta src e todos os arquivos ts serao nela;

// vamos compilar tudo de uma vez da pasta src
// comando : tsc

// no tsc compilador existe o watch que ele fica assitindo e sempre que adicionar um arquivo na src ele ja compila
// comando: tsc -w ou tsc watch
// com isso toda alteracao ao salvar ele ja compila 