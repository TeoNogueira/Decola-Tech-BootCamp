function cb1(a, b) {


    return a - b

} 


function cb2(a, b) {

return a * b

}



const cb3 = (a, b) => {

    return a + b

}

const recipe = cb3(cb2(5, 15), cb1(5, 30))


console.log(recipe)