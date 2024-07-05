// Interface com função

interface cursosss{
    titulo:string;
    descricao:string;
    
    // A interrogação apos o nome para torna opcional
    iniciarCurso?(t:string):void;
}
// herança 
 interface cursoProg extends cursosss{
    aulas:number;
    maxAlunos:number;
 }



let curxo:cursoProg;

curxo= {
    titulo: "Curxo top",
    descricao:"Super Cursos",
    aulas:150,
    maxAlunos:20,
    iniciarCurso(titulo){}
}
console.log(curxo);