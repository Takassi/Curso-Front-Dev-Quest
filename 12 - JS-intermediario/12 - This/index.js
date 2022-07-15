let comida = {
    nome: 'Brocolis',
    temperatura: 0,
    cozinhar: function(TemperaturaDeCozimento){
    console.log('this no contexto do objeto da comida', this)
    this.temperatura = TemperaturaDeCozimento;
}
}

console.log(comida)
comida.cozinhar(100)
console.log(comida)