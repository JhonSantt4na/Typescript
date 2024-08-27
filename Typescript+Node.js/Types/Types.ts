// Inferencia de tipo 
// Ao escrever o js já observa e tipa dinamicamente a nossa variavel

let numero = 10    // JS entende que é numero 
let texto = 'Olá mundo' // JS entende que é string

// Basicamente ficamos dependendo da inferencia do JS


// No typescript agente temos que assinar as nossas variaveis, porem não é obrigatorio

let numerots:number = 10 
let um_ou_Outro:boolean = true 
let textots:string = 'Olá mundo' 

// se quisermos que aceite somente os tipos numero ou string? (Podemos fazer para outros tipos)
let numero_string:number|string = 10 

// any = usaremos igual o js por inferencia
let qualquer_coisa:any = 'Posso colocar qualquer tipo'

// Se nosso array for numerico, usaremos a mesma coisa
let numbers: number[] = [1, 2, 3];

// Temos a nossa tupla e temos que seguir a ordem um texto depois um numero nese caso abaixo
let tuple: [string, number] = ["age", 30];

// Nas Funções


// se ela vai somar 2numero, temos que ter um retorno de um numero:
// nome_funcao(arg1:numero, arg2:numero): retorno da função {}
// a função obrigatoriamente tera que retornar um numero.
// se vim um parametro string o proprio ts mostra pra agente que esta esperando um numero 

function soma(a:number,b:number): number{
   return 2
}

// Podemos fazer isso com varios outros tipos de função:
// ex: função que não retorna nada tipo (void)
// ou função que retorna any

function naoretorna():void {
   let msg = 'Não tem retorno'
}

function naoseiqtiporetorna():any {
   let msg = 'Funciona por inferencia'
   return msg
}