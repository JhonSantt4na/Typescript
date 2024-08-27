let soma = function (x, y) {
   return x + y
}

let subt = function (x, y) {
   return x - y
}

var operacaoes = {
   sun: function (x, y) {
      return soma(x, y)
   },

   sub: function (x, y) {
      return subt(x, y)
   }
}

exports.calculadora = operacaoes

var calculadora = require('./calculadora')