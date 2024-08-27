(function(global){
   var soma = function(a, b){
      return a + b
   }

   var subtracao = function(a, b){
      return a - b
   }
   
   var operacoes = {
      sum: function(a, b){
         return soma(a,b)
      },

      sub: function (a, b){
         return subtracao(a,b)
      }
   }

   global.operacoes = operacoes

})(globalThis)

console.log(operacoes.sum(1,1))
console.log(operacoes.sub(1,1))