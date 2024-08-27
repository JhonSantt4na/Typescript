//Enums são uma ferramenta poderosa em TypeScript
//para trabalhar com conjuntos de valores fixos e
//garantir que o código seja mais robusto e fácil
//de entender.
//Exemplo:

enum Cores {
   VERMELHO, AZUL, AMARELO
}

let cor: Cores = Cores.AZUL

enum Direction {
   Up = "UP",
   Down = "DOWN",
   Left = "LEFT",
   Right = "RIGHT"
}

let dir: Direction = Direction.Left;
console.log(dir); // Output: "LEFT"