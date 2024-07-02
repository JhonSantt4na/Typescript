// Rest é um espalhador de obj => array
// Espalar valores para um função

function fmulti(...n:number[]){
    let s:number = 1;
    
    for (let elemento_de_n of n){
        s*= elemento_de_n;
    }
    // ou 

    // n.forEach((elemento_de_n)=>{
    //     s*= elemento_de_n;
    // })
    return s;
}

//console.log(fmulti(10,10,10)); // Ai eu teria que adicionar o parametro na função
console.log(fmulti(10,10,10)); // com o rest posso adicionar qunatos valores forem necessario
