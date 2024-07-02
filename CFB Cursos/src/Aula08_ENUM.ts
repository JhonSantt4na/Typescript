// Enumeradores numericos e textuais 
// Enumeradores = São conjuntos de dados que podemos ultilizar ou clasificar
// por valores numerais ou textuais.

enum dias {
    domingo = 0, // Se for em seguencia não precisa colocar os numeros
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6 
}// Lembrando que pode ser qualquer valor

enum tipoUsuario{
    USER,
    ADMIN,
    SUPER
}
// Nesse caso ai foi tipo numerico pois ele entende pela ordem
// Quando vamos especificar valores diferente do padrão ai nesse caso colocamos 

console.log(tipoUsuario.SUPER); // Return 2


console.log(dias.domingo); // Retorna 0
console.log(dias['quinta']); // Retorna 4
console.log(dias[3]); // Retorna "quarta"

const dia = new Date(); // Importando tudo da data
console.log(dias[dia.getDay()]); // getDay retorna o dia da semana de 0 a 6
// com isso agente passa o dia que for para o nosso enum retorna o dia escrito por extenço

// Enumerador Textual
enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    Azul = "#00f"
}

console.log(cores.branco); 
// OU
console.log(cores["branco"]);
// Não funciona
// console.log(cores["fff"]);

let tipo:tipoUsuario = 1; // so dados do tipo usuario que no caso é de 0,1,2
//ou
let tippo:tipoUsuario = tipoUsuario.SUPER; // Return o 2