"use strict";
function testet() {
    console.log("Texte");
}
testet();
testet();
function logar(user, password) {
    console.log(`Usuario ${user} Logado com a Senha: ${password}`);
}
logar("Jorge", "12345");
function soma(numero1, numero2) {
    let somando = numero1 + numero2;
    return somando;
}
console.log(soma(10, 20));
const resultadoSoma = soma(25, 25);
console.log(resultadoSoma);
let resultadostring = soma(10, 10).toString();
console.log(resultadostring);
