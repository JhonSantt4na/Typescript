var carro = 'Pode ser usada globalmente';
var global = function () {
    if (false) {
        var x = 1;
    }
    console.log(x);
};
global();
