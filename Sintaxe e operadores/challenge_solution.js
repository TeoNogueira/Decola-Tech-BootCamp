
function compareNumeros(a, b) {

const primeiraFrase = criaPrimeiraFrase(a, b)
const segundaFrase = criaSegundaFrase(a, b)

}


function criaPrimeiraFrase(a, b) {


    const iguais = ''
 
    
if(a !== b) {


    iguais = 'Não'
}

return `Os números ${a} e ${b} ${iguais} são iguais.`


}

function criaSegundaFrase(a, b) {

    let result = 'menor'
    let result20 = 'menor'

    const soma = a + b
    const compare = soma > 10;
    
    const compare20 = soma > 20


    if(compare) {

        result  ='maior'
    }

    if(compare20) {

        result  ='maior'
    }
}