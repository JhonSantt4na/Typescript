"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 1] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 2] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.SUPER);
console.log(dias.domingo);
console.log(dias['quinta']);
console.log(dias[3]);
const dia = new Date();
console.log(dias[dia.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["Azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores["branco"]);
let tipo = 1;
let tippo = tipoUsuario.SUPER;
