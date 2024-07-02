"use strict";
teste();
function teste() {
    console.log("teste");
}
const testando = () => {
    console.log("testando");
};
testando();
const msg = (txt = "...") => {
    console.log(txt);
};
msg("Ola, Mundo!");
msg();
const somas = (n) => {
    let s = 0;
    n.forEach((elementos) => {
        s += elementos;
    });
    return s;
};
const numer = [10, 20, 30, 40, 50];
console.log(somas(numer));
