// Usaremos a seguinte sintaxe
interface INomedainterface { //Adicionamos o 'I' na frente para mostrarmos que é uma interface]
   soma(a,b): number;
}

// extends é usado para permitir que uma classe herde de outra classe.
// extends também pode ser usado com interfaces para permitir que uma interface herde de outra interface.

// implements é usado para garantir que uma classe cumpra um contrato definido por uma ou mais interfaces.

class NovaClase implements INomedainterface{
   private atributo: Number; 
   public atributo2: Boolean;
   protected atributo3: Object;

   constructor(parametros: Boolean){
      this.atributo2 = parametros
   }

   imprimir(meessage: String): void{
      if(this.atributo2) {
         console.log(meessage)
      }
   }

   // Ja que tenho a interface que mostra os tipos aqui eu não preciso usar
   soma(a,b){
      return a+b
   }
}