"use strict";
function somaa(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(somaa(20));
function novouser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
    console.log(` 
        Usuario: ${user},
        Senha : ${pass},
        Nome = ${nome}.
        `);
}
novouser("jhon", "123456");
novouser("jhon", "123456", "jorge");
