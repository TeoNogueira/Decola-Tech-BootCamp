let array = ['array1', 'array2', 'array2', 'array3','array4','array5','array6',]



let object = {

    prop1: 'valor1',
    prop2: 'valor2',
    prop3: 'valor3',
    prop4: 'valor4',
    prop5: 'valor5',
    prop6: 'valor6',
    prop7: 'valor7',

}

// FOR - executa uma função até que ela seja falsa
for(let i = 0; i < array.length; i++) {
    // console.log(array[i])

}

// FOR IN - executa uma repetição a partir de uma propriedade
// com array
for(let i in array)  {

    // console.log(array[i] + ' | Indice:')
    // console.log(i)
}

// com objeto
for(i in object) {


    // console.log(object[i])
    // console.log([i])
}

/////////////////////////

for (i of array) {

/// console.log(i)

}

// com Objetos


for(i of object.prop1) {

    console.log(object.prop1)
}