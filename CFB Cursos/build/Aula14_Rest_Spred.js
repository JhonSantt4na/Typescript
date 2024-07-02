"use strict";
function fmulti(...n) {
    let s = 1;
    for (let elemento_de_n of n) {
        s *= elemento_de_n;
    }
    return s;
}
console.log(fmulti(10, 10, 10));
