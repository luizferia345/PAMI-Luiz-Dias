console.log("Hello meus bacanos");

// Criação de variavel
var Variavel01 = "Oi,";
let Variavel02 = "tudo bem?";
const Variavel03 = "Vocês são lindos";

// Concatenação de variaveis
console.log(Variavel01 + Variavel02); // sem espaços
console.log(Variavel01, Variavel02); // insere espaços

Variavel01 = "Olá ";
console.log(Variavel01, Variavel02);

// Variavel03 = "Helloooo"
// Variaveis do tipo constante não podem 
// receber um novo valor que sobscreeva
// o original

let Teste = "texto";
console.log(typeof(Teste));
Teste = 2;
console.log(typeof(Teste));
Teste = { nome: "João", idade: 38};
console.log(typeof(Teste));
Teste = [1, 2];
console.log("O resulado do tipo de array é", typeof(Teste));