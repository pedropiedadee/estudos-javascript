console.log(this)

var teste = 'teste'

console.log(this.teste)

let pessoa = {
  nome: 'Pedro',
  idade: 29,
  falar: function(){
    console.log('Olá Tudo Bem');
  },

  dizerNome(){
    console.log('Meu nome é ' + this.nome)
  },

  aniversario()
  {
    this.idade += 1;
  },

  saudacao(){
    return 'Seja Bem vindo Sr' + this.nome
  }
}

console.log(pessoa.idade)

pessoa.aniversario()

console.log(pessoa.idade)

pessoa.dizerNome();

var sdc = pessoa.saudacao();

console.log(sdc);