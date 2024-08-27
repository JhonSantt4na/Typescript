var array = [1,2,3]
var x = array[1]
var x = array[2]
var x = array[3]

// Antigamente tinhamos que fazer assim para colocar cada um na sua variavel
// no ES6 usamos a seguinte forma

let [a,b,c] = [1,2,3]

console.log(a,b,c)

// Ou seja desestruturamos o array cada um com a sua propria variavel

// para objetos :

const pessoa = {
   "nome" : "Jorge",
   "sobrenome" : "Santt4na",
   "idade" : 22,
   "cidade": "sp"
}

var nome = pessoa.nome
var sobrenome = pessoa.sobrenome

// Atualmente usamos:

const {idade, cidade} = pessoa

