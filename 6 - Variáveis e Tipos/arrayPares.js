function changePairs(arr) {

for(let i= 0; i < arr.length; i++) {

    if(arr[i] === 0) {

        console.log('Você já é zero')

    } else if(arr[i] % 2 === 0) {
        console.log(`Substituindo ${arr[i]} por 0...`)
        arr[i] = 0
    }

}

return arr

}


let array = [1, 2, 3, 4, 5, 6, 55, 22, 24, 26, 38, 41, 90]
changePairs(array)