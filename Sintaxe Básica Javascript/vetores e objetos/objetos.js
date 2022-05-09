
// Objetos tem Chaves e Valores dentro delas.

function soma(a, b) {

    return a + b
}

const result = 'Hello!'

let obj = {

string: 'String',
nb: 500,
resultConst: result,
func: soma(5, 5),
bool: true,
objInterno: {
resultinter: 'Result String Intern'
},

}

var objInt = obj.objInterno.resultinter
var objInt = obj.func
var objInt = obj.bool

const {bool, objInterno: {resultinter}} = obj

// console.log(obj.bool, obj.objInterno.resultinter)

console.log(objInt)


// console.log(obj)