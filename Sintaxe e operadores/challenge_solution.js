
function compareNumeros(a, b) {

const primeiraFrase = criaPrimeiraFrase(a, b)
const segundaFrase = criaSegundaFrase(a, b)


return `${primeiraFrase} ${segundaFrase}`
}



function criaPrimeiraFrase(a, b) {


    const iguais = ''
 
    
if(a !== b) {


    iguais = 'Não'
}

return `Os números ${a} e ${b}${iguais} são iguais.`


}

function criaSegundaFrase(a, b) {

    const soma = a + b

    let result = 'menor'
    let result20 = 'menor'

  
    const compare = soma > 10;
    
    const compare20 = soma > 20


    if(compare) {

        result = 'maior'
    }

    if(compare20) {

        result  ='maior'
    }


    return `Sua soma é ${soma}, que é maior que ${result} que é 10 e ${result20} que 20.`
}


console.log(compareNumeros(10,10))