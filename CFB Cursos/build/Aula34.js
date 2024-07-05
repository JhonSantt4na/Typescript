"use strict";
let ary = [10, 20, 30, 40];
let collor = ["Azul", "Branco", "Vermelho", "Verde"];
const objet = {
    cor1: "verde",
    cor2: "Azivis",
    cor3: "Red",
    cor4: "Preto"
};
let { cor1, cor2, cor3, cor4 } = objet;
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
const fcores = () => {
    return ["verde", "Amarelo", "vermelho", "Jhon"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de Typescript";
let [...t] = texto.split(" ");
console.log(t);
let [p1, p2, p3] = texto.split(" ");
console.log(p1);
console.log(p2);
console.log(p3);
