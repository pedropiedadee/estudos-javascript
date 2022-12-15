var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("este é o conteudo do paragrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

var container = document.getElementById('container');

console.log(container);

var ul = document.createElement("ul")

var li = document.createTextNode("teste aqui tmj");

ul.appendChild(li);

body.appendChild(ul);