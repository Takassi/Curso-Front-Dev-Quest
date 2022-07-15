let pessoas = [
    { nome: 'takassi', idade: 28 },
    { nome: 'Euclydes', idade: 60 },
    { nome: 'Ruiz', idade: 28 }
]

// let pessoaComIdade28Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 28){
//         pessoaComIdade28Anos.push(pessoas[i])
//     }
// }

// console.log(pessoaComIdade28Anos)


// let pessoaComIdade28Anos = pessoas.filter(function(pessoa){ 
//     return pessoa.idade === 28
// })

// console.log(pessoaComIdade28Anos)

let pessoaComIdade28Anos = pessoas.filter((pessoa) => pessoa.idade === 28)

console.log(pessoaComIdade28Anos)