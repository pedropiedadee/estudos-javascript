function exibir(num){
  console.log("A operação resultou em", num)
}

function soma(a,b, callback){
  var op = a + b;
  callback(op);
}

function multiplicação(a,b, cb){
  var op = a * b;
  cb(op);
}

soma(10, 20, exibir);

multiplicação(10, 10, exibir);
