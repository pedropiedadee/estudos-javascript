var title = document.querySelector("#title");

title.setAttribute("class", "testando atributo");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "pedroTESTE");

console.log(subtitle);

//Remover atributos
var lista = document.querySelector("#lista");

lista.removeAttribute("id");

console.log(lista);

var items = document.querySelectorAll(".item");