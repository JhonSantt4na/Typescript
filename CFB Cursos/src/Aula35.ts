// em POO static = criar propriedades ou metodos estaticas
// são membros que estão associado a clase e não a instanciação
// sempre que colocamos o static vai sempre apontar para o mesmo endereço de memoria

import { Globais } from "./Globais";

// não foi preciso intanciar globais, e nem um construtor ele tem alem disso é abstract que não pode ser instanciada
console.log(Globais.teste);
Globais.teste = 10;
// todas as pasta que tiver usando o teste mudara
console.log(Globais.teste);