//Criar Um elemento
var elemento = document.createElement("h3");
elemento.classList = "testando classe";

var texto = document.createTextNode("este é o texto do h3");

elemento.appendChild(texto);

console.log(elemento);

var title = document.querySelector("#title");

console.log(title);

var pai = title.parentNode;

pai.replaceChild(elemento, title);
