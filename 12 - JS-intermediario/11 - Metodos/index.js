let usuario = {
    nome: 'takassi',
    excluir: function () {
        console.log(' o usuario,' + this.nome + 'foi excluido!')
    }
}

usuario.excluir()