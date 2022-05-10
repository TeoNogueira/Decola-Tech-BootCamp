const alunos = [
{nome: 'Johnnatan', nota: 5, turma: '1b'},
{nome: 'Ashley', nota: 9, turma: '1b'},
{nome: 'Anthony', nota: 6, turma: '2c'},
{nome: 'Beatrix', nota: 2, turma: '2c'},
]

//My Solution


const filt = alunos.filter(item => item.nota >= 5).reduce((acc, {nome}) => {
    acc[nome] = acc[nome] + 1 || 1

    return acc

}, {})

const transform = Object.getOwnPropertyNames(filt)

console.log('Alunos Aprovados por média:\n ' + transform)




//////////////////////////////////////////////////

//Teacher Solution

// function alunosAprovados(a, b) {

// let aprovados = []

// for(let i= 0; i < a.length; i++) {

//   const { nota, nome} = a[i]

// if(nota >= b) {

//      aprovados.push(nome)

// }
// }
//  return aprovados   
// }

// console.log(alunosAprovados(alunos, 5))