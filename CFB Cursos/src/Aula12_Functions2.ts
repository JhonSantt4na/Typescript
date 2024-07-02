// Function com parametro com valor padrao
function somaa(n1:number=0,n2:number=0):number{
    return n1 + n2;
}
// Com os parametros n1=0 o padrao dele então se não passar os valores ele não retorna erro
console.log(somaa(20)); // n2 fica sendo seu valor padrao 0

// Function com parametro Opcional ?
function novouser(user:string, pass:string, nome?:string ):void{
    let dados = {user,pass,nome}
    console.log(dados);
    console.log(` 
        Usuario: ${user},
        Senha : ${pass},
        Nome = ${nome}.
        `)
}

novouser("jhon", "123456"); // nome fica indefinido
novouser("jhon", "123456", "jorge"); // retorna com o valor jorge no nome 
