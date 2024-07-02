// Função anonima muito usado nas funções de calback
teste();

function teste():void{
    console.log("teste")
}
// pode ser chamado antes da criação pois é icada no topo do codigo 
// porem não em função anonimas 
// testando(); // erro pois não é incada

const testando = ():void=>{
    console.log("testando");
}

testando();
// Arrow Function ou função de seta 
// ela não tem uma declaração é direta 
// variavel = (parametros):retorno => {bloco de codigo}

const msg = (txt:string="..."):void=>{
    console.log(txt)
}
msg("Ola, Mundo!");
msg(); // Se não passar ele retorna o valor parametro ou posso passar se como opcional com o ? se não passar nada manda undefind

// 
const somas = (n:number[]):number=>{
    let s:number = 0;
    n.forEach((elementos)=>{
        s+=elementos;
    })
    return s;
}   
const numer:number[] = [10,20,30,40,50]
console.log(somas(numer));