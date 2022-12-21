var x = 0;

var myTimer = setTimeout(function() {
  console.log('o x é 0')
}, 1500);

x = 5;

if(x > 0){
  clearTimeout(myTimer);
  console.log('O x passou de 0')
}

// Clear Interval
var myInterval = setInterval(function() {
  console.log('Imprimindo intervalo');
}, 500);

setTimeout(function(){
  clearInterval(myInterval);
  console.log('Passou um segundo e meio já')
}, 1500);