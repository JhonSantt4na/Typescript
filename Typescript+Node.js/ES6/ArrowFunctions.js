const soma = (num1, num2) =>{
   return num1 + num2
}

// Se vor apenas uma linha podemos fazer o seguinte:

const msg = (nome) => console.log(`olá ${nome}`)


console.log(soma(5,4))
console.log(msg('jorge'))

// Parametros opcionais 

// Forma usada antigamente:

function exemplo(a,b,c){
   a = a === undefined ? 1 : a
   b = b === undefined ? 1 : b
   c = c === undefined ? 1 : c
   console.log(a,b,c)
}

exemplo(1,2,3)
exemplo(1,2)

// Usando o metodo de If ternario 
// se o parametro for igual a undefined colomanos o seu valor com 1
//  caso não usaremos o valor que foi atribuido

// Forma Atual de usar

function exemplo2 (a=1, b=2, c=3){
   console.log(a,b,c)
}
exemplo2(1,2,3)
exemplo2()
// caso não passe os valores ele usa o 1,2,3
// e se passar vamos usar os que foi atribuidos

