function changeMode() {
changeClass()
changeText()


}

function changeClass() {

    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)

}


function changeText() {

    const lMode = 'Light Mode'
    const dMode = 'Dark Mode'

    if(body.classList.contains(darkModeClass)) {

        button.innerHTML = lMode;
        h1.innerHTML = dMode + ' ON'
        return

    }

    button.innerHTML = dMode
    h1.innerHTML = lMode + ' ON'
}


const darkModeClass = 'dark-mode';
const button = document.querySelector('#mode-selector')
const h1 = document.querySelector('#page-title')
const body = document.querySelector('body')
const footer = document.querySelector('footer')


button.addEventListener('click', changeMode)