function evenOrOdd(arr) {

    let empty = [];


    for(let i = 0; i < arr.length; i++) {

        if(arr[i] % 2 === 0) {

            empty.push(arr[i])

        }

    }

console.log(empty)

}

const test = [50, 31, 32, 33, 41, 33, 34, 37, 40, 222]


evenOrOdd(test)