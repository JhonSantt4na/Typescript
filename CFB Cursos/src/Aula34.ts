// Destruturação
    // let aa,bb,cc,dd;
    // let ary = [10,20,30,40];
// Forma normal
    // aa = ary[0];
    // bb = ary[1];
    // cc = ary[2];
    // dd = ary[3];

// tipo = tipo
//  []  =  []
//  {}  =  {}
// se não tiver os mesmos tipos dos mesmos lado da erro

let ary = [10,20,30,40]
// Forma 1
    // let [aa,bb,cc,dd] = ary
// Forma 2
    // let [aa,bb,cc,dd] = [10,20,30,40];

// podemos fazer para qualquer tipo de dados

let collor = ["Azul","Branco","Vermelho","Verde"]
    // let [aa,bb,cc,dd] = collor;

// desestruturando Obj
const objet = {
    cor1 : "verde",
    cor2 : "Azivis",
    cor3 : "Red",
    cor4 : "Preto" 
}

let {cor1,cor2,cor3,cor4} = objet
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
// no js normal ele aceita somente no n1 e n retorna erro 
    // let [nul1,nul2,nul3] = [10]
// no ts preciso adicionar parametros padrão
    // let [nul1=0,nul2=0,nul3=0] = [10]
// Até aonde tiver variavel vai ser atribuido
    // let [nul1=0,nul2=0,nul3=0] = [10,20,3421,23,465,7,4,34,23,12,1]
// Mas podemos usar tipo o sprad para o n3 receber os outro valores
    // let [nul1=0,nul2=0,...nul3] = [10,20,3421,23,465,7,4,34,23,12,1];

// podemos ter uma função para desestruturar
const fcores=()=>{
    return ["verde", "Amarelo", "vermelho", "Jhon"];
}

let [co1,co2,co3,co4] = fcores();

// Ou podemos fazer assim 

let texto = "Curso de Typescript"
let[...t]=texto.split(" "); // Returna um array com as palavras
console.log(t);
// ou posso colocar em variaveis
let[p1,p2,p3]=texto.split(" ");
console.log(p1);
console.log(p2);
console.log(p3);