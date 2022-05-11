const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


let catFetch = document.querySelector('#cat-fetch')
let catButton = document.querySelector('.cat-button')

async function getCatsRandom()  {
try {
    const data = await fetch(BASE_URL);

    const json = await data.json()


    return json.webpurl
}

catch(e) {

console.log(e.message)

}

}


const loadImg = async () => {

    catFetch.src = await getCatsRandom()

}

catButton.addEventListener('click', loadImg)


loadImg()