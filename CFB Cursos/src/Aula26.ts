// Interfaces Objeto Literais
let novo_curso1:{
    //Definindo propriedade
    titulo:string;
    des:string;
    aula:number;
    qtddAlunos:number;
}
// Podemos definir varias propriedades
// Passar o objeto como parametro com varias propriedades
novo_curso1 = {
    titulo:"Typescript",
    des:"Curso de Typescript",
    aula:100,
    qtddAlunos:60
}
console.log(novo_curso1);
// se eu for criar outro curso, basicamente vou ter que fazer a mesma coisa ai 
// vamos definir um modal estilo a classe que criamos 
// Isso se chama interfaces

interface cursoint{
    titulo:string;
    des:string;
    aula:number;
    qtddAlunos:number;
}
// Caso agente quiser colocar parametros usaremos o  qtddAlunos?:number
// depois disso posso criar varios usando esse modal 

let curso11:cursoint;
let curso22:cursoint;
let curso33:cursoint;

// Agora vou adicionar os valores 

curso11 = {
    titulo:"Javascript",
    des:"Curso de JS",
    aula:266,
    qtddAlunos:50
}
curso22 = {
    titulo:"HTML",
    des:"Curso de HTML",
    aula:150,
    qtddAlunos:50
}
curso33 = {
    titulo:"CSS",
    des:"Curso de CSS",
    aula:100,
    qtddAlunos:33
}
console.log(curso11)
console.log(curso22)
console.log(curso33)