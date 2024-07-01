// let cursos = [] = Type Any[]
// let cursos = [""] = Type String[]
// let cursos = [1] = Type Number[]

let cursos:string[] = ["Javascript", "Typescript", "node"];
cursos.push("Git+Mysql");



// Union Types
// Juntar tipos diferentes 
// Usando com cautela 

let numero:string|number = 12;
// Ou seja numero pode ser ou string ou  numero 
// podemos ta,bem usar o any = let numero:any = "Recebe qualquer valor";

// Union Types nos arrays 
// pode ser na atribuiçao que automaticamente ele intende ex:
// let valores =[1,54,7, "Oi", true];

// ou simplismente declaramos eles com essa sintaxe
let valores :(number|boolean)[] = [1,54,7,8,9,4, true];

numero = "Jhonnnns";

console.log(cursos);
console.log(numero);
console.log(valores);