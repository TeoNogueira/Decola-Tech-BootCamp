let obj = Object.freeze({

prop1: 'Kagura', prop2: 'Harith',
prop3: 'Fanny', prop4: 'Selena'

}) // key and value



// const test = Object.getOwnPropertyNames(obj) // transform keys in slots Arrays

//Object.values()
//Object.keys()
//Object.getOwnPropertyNames()
obj.prop4 = 50
const { prop4 } = obj

// console.log(prop4)



let heroes = [

    { heroName: 'Kagura'},
    { heroName: 'Harith'},
    { heroName: 'Selena'},
    { heroName: 'Hayabusa'},

] // key and value
    


// My Exercise
    const fil = heroes.filter(item => item.heroName).reduce((acc, {heroName}) => {

        acc[heroName] = acc[heroName] + 1 || 1

        return acc

    }, {})

    
    const transform = Object.getOwnPropertyNames(fil)


function random() {

const lengthTr = transform.length

const randomLength = Math.floor(Math.random() * lengthTr)

const putInArray = transform[randomLength]


console.log(putInArray) // or attributes DOM ex: src && path_photos random


}


const invokeRandom = ( ) => {

    setInterval(() => {

        random()

    }, 2000)


}

invokeRandom()