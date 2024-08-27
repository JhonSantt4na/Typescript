// Typescript usa o paradigma orientado a objeto

//exports class Nomedaclasse() { podemos usar assim 
class Nomedaclasse{
   private atributo: Number; 
   public atributo2: Boolean;
   protected atributo3: Object;

   //public: Acesso de qualquer lugar.
   //private: Acesso apenas dentro da própria classe.
   //protected: Acesso dentro da classe e subclasses.


   // Metodo principal de uma classe é o constructor 
   // pode receber qualquuer tipo e nele temos os metodos
   constructor(parametros: Boolean){
      this.atributo2 = parametros
   }
   imprimir(meessage: String): void{
      if(this.atributo2) {
         console.log(meessage)
      }
   }  
}

const novo = new Nomedaclasse(true) // Novo recebe as caracteristicas do Nomedaclasse
novo.imprimir('Jorge') // Usando o metodo imprimir da classe

export default Nomedaclasse // ou importar desta forma


//Use extends para herdar de outra classe ou interface.
//Use implements para garantir que uma classe siga o contrato de uma interface