// Vetores ou Arrays

// O primeiro índice do array é o 0


/*

Funções para o Array:

forEach() // Para cada
.push()
.pop()
.unshift()
.shift()
.indexOf()
.map()
.filter()
.reduce()

*/



const msg = 'Hello World'


let array = ['string', 1, true, ['array1', 'Hello'], ['Array2'], [`${msg}`]];

// array.push(50)
// array.pop()
// array.unshift('String one')
// array.shift()
// // console.log(array);

// array.forEach(function(item, index){

//     console.log(item, index)

// })

// console.log(array.indexOf(true)) //  2


// const arr = array.splice(0, 4)

// console.log(arr)

const arr = array.slice(0, 4)

console.log(arr)