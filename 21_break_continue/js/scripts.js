for(var i = 10; i > 0; i--){

  console.log('Testando ' + i);

  if(i === 5){
    break
  }
}

var x = 0;

while(x < 100){
  x += 10;
  if(x === 50 || x == 90){
    console.log('Continue');
    continue;
  }
  console.log(x)
}