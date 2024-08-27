export function soma() { }
export default
   function sub() { }
function div() { }
function mult() { }

export { soma, sub }
export * from 'Calculadora' // Ou seja exportando tudo com o nome calculadora
// Dessa forma posso exporta qual eu quero 
//  Para importar usamos a seguinte sintaxe
// temos tambem a forma :
// export function soma() { }
// export default

// Como Importar

// importação padrao
// import 'nomedomodulo' from './caminho_do_arquivo'

// importar tudo com um nome 
// import * as 'nomedomodulo' from './caminho_do_arquivo'

// Importa somente um metodo
// import { nome_do_metodo } from './caminho_do_metodo, nome_do_pacote'