var carro = 'Pode ser usada globalmente'

const global = function(){
   if(false){
      var x =1
   }
   console.log(x)
}

global()
