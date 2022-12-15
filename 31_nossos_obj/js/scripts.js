let pessoa = {
  nome: 'Pedro',
  idade: 29,
  falar: function(){
    console.log('Olá Tudo Bem');
  },
  soma: function(a, b){
    return a + b;
  }
}

console.log(pessoa.nome);

pessoa.falar();

var result = pessoa.soma(100, 900);

console.log(result);
