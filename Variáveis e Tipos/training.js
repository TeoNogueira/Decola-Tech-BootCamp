function putPairs(string) {

for(let i = 0; i< string.length; i++) {


    if(string[i] === 0) {

        console.log('O número já é par!')
    } else if(string[i] % 2 === 0) {

        console.log(`Colocando 0 em ${string[i]}`)
        string[i] = 0

    }

}

return string
}


let arr = [1, 2, 3, 4, 5, 6]

putPairs(arr)