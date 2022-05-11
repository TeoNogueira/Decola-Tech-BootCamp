const myPromise = new Promise((resolve, reject) => {

let count = 0


setInterval(() => {
    resolve(console.log(`Estamos chegando em... ${count++}`))
},2000)

})

console.log(myPromise)