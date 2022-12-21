var btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
  console.log("Clicou");

  console.log(this);

  this.style.backgroundColor = "red";
})

var title = document.querySelector("#title");

title.addEventListener("click", function() {
  console.log("teste");
  
  this.style.color = "purple";

  var subtitle = document.querySelector(".subtitle");

  subtitle.style.display = "none";
});