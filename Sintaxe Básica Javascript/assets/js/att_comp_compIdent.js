// sinal de = significa atribuição
//  sinal de == comparação de valor
//  sinal de === comparação de valor e tipo
//  sinal de !=  diferente no valor
//  sinal de !==  diferente no valor e tipo


//Ex:

var nome = 'Robot'

var machine = 'Machine'


var numb = 1 === '1'
var numbV = 1 == '1'
var numbF = 1 === 1

console.log(numb) // falso porque o tipo não é string
console.log(numbV) // True porque o valor é 1
console.log(numbF) // True porque o valor é 1 e o tipo é number



if(nome == 'Robot') {

    console.log('My name is ' + machine)
}

