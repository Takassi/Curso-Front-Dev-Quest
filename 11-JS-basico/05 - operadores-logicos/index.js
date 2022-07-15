/*
    == --- igual  --- a==b --- verdadeiro se a for igual b 
    === --- identico --- a===b --- verdadeiro se for identico a b 
    !== --- nao identico --- a !==b --- verdadei se a nao for identico a b
    < --- menor que --- a < b --- verdadeiro quando a for menor que b 
    <=  --- menor igual que --- a <= b --- verdadeiro quando a for menor ou igual a b 
    > --- maior que --- a > b --- verdadeiro quando a for maior que b
    >= --- maior igual que --- a >= --- verdadeiro quando a for maior ou igual b 
*/

const a = 2
const b = 2

console.log(a === b && a <= b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b &&  a === b)
// F e V = F

console.log(a > b && a < b)
//F e F = F

/* OR */

console.log(a === b && a <= b)
// V ou V = V

console.log(a === b && a < b)
// V ou F = V

console.log(a > b &&  a === b)
// F ou V = V

console.log(a > b && a < b)
//F ou F = F

/* NOT */

// console.log(!(a === b )) //false

console.log(!(a < b)) //true

