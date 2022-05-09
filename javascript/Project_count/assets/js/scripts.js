const cont = document.querySelector('#currentNumber')

let count = 0

function inc() {

    count++;
    cont.innerHTML = count

}


function dec() {

    count--;

        cont.innerHTML = count
}

