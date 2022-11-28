var nome = 'Pedro';

console.log(nome.length);

console.log(nome[0]);

var frase = 'O Rato roeu a roupa do rei de roma';

console.log(frase.indexOf('roeu'));

//Slice
var roeu = frase.slice(7,11);

console.log(roeu);

var novaFrase = frase.replace("roeu", "Brasilll");

console.log(novaFrase);

console.log(roeu[0].toUpperCase() + roeu.slice(1, 4));