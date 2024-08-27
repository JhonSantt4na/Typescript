let a = 1

function funcao(){
   console.log(a)
   let b = 2

   if(true){
      let c = 3
      console.log(b)
   }
   console.log(c)
}

funcao()

// o let podemos mudar valores mas nunca reatribuir ela

//  No caso da let funciona nos bloco
//  o a como ele é global conseguimos usar na função
//  a b como esta dentro da função tem acesso ao bloco do if 
//  o c não existe pra esse codigo, tentamos acessar algo inacessivel 


// Const ele basicamente é a mesma coisa que o let porem 
// é constante não pode mudar o seu valor