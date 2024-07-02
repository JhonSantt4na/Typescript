"use strict";
let dados = {
    nome: "JhonnDev",
    idade: 25,
    status: "Ativo",
    ola: () => { console.log("Oii"); },
    info: (p) => { console.log(p); }
};
dados.nome = "Santt4na";
console.log(typeof (dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
