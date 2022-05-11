function calculeIdade(anos) {


    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        
    } anos de idade.`;

}


const pessoa1 = {

    nome: 'Amelia',
    idade: 25

}

const pessoa2 = {

    nome: 'Thammella',
    idade: 42

}

const pessoa3 = {

    nome: 'Dice',
    idade: 19

}


console.log(calculeIdade.call(pessoa3, 40))

console.log(calculeIdade.apply(pessoa2, [25]))

console.log(calculeIdade.apply(pessoa1, [130])) // apply envolve em colchetes