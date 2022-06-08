
const b = 'Hello'
const c = 'World!'

const txt = a => {

    return b + ' ' + c
}



const myNameIs = 'My name is Teo Nogueira'

const nm = (a) => myNameIs


const result = (a, b) => {

const upp = a.toUpperCase()
const upp2 = b.toUpperCase()

return `${upp} ${upp2}`

}

const total = result(txt(), nm())



console.log(total)