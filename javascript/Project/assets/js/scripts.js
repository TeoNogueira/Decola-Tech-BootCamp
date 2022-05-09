/*
Others:
document.getElementById('')
document.getElementsByTagName('')
document.getElementsByClassName('')
document.querySelectorAll('')

*/


const cont = document.querySelector('.container')
const h1 = document.createElement('h1')
h1.classList.add('h1')


h1.innerHTML += 'Resultado de números pares:'
// h1.style.userSelect = 'none'
h1.style.marginBottom = '40px'

h1.addEventListener('mouseover', () => {

    h1.style.cursor = 'pointer'
    h1.style.opacity = '0.9'
    h1.addEventListener('mouseout', () => {

        h1.style.opacity = '1'

    })

})

cont.style.boxShadow = '-2px -5px 29px -15px #000'
cont.append(h1)

cont.style.width = '900px'
cont.style.height = '500px'
cont.style.background = "#bbdc9a"
cont.style.display = 'flex'
cont.style.justifyContent = 'center'
cont.style.alignItems = 'center';
cont.style.flexDirection = 'column';

cont.style.borderRadius = '4px';
cont.style.position = 'relative'
cont.style.top = '70px'
cont.style.left = '220px'



function parOuImpar(arr) {

let empty = []

for(let i = 0; i < arr.length; i++) {

    if(arr[i] % 2 === 0) {

        empty.push(arr[i])
}

}

cont.append(empty)
}


const listOne = [50, 51, 32, 50, 50 , 60, 90, 91, 92, 93, 94]

parOuImpar(listOne)


