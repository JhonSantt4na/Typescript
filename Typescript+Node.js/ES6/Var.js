//  Var pode ser acessada de qulquer lugar


function funcao(){
   if(false){
      var x =1
   }
   console.log(x)
} 
// Retorna undefined como se não tiverse sido definida
 
// funcao()
var a = 1
function funcao(){
   console.log(a)
   var b = 2

   if(false){
      var c = 3
      console.log(b)
   }
   console.log(c)
} // Retorna undefined como se não tiverse sido definida
 
funcao()