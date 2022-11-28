var frase = 'Esse é uma frase bem legal';

console.log(frase.toUpperCase());

var fraseAlta = 'ESSA FRASE ESTAVA EM CAIXA ALTA';

console.log(fraseAlta.toLowerCase());

//trim;

var nome = '        PEDRO                  ';

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

//Split
console.log(frase.split(' '));

var tags = 'PHP JS VUE REACT CSS HTML';

console.log(tags.split(' '))

//Last IndexOF
var fraseTeste = 'I want the last word of this text want';

console.log(fraseTeste.indexOf('want'));

console.log(fraseTeste.lastIndexOf('want'));
