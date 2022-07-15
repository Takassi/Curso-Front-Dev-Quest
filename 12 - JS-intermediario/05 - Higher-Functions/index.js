// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 07
//     let anoDeNascimento = 2022 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)

//     console.log(imprimir)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento :' + anoDeNascimento)
// }

// calcularAnoDeNascimento(28, 11, imprimirAnoDeNascimento  )


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(3)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))
