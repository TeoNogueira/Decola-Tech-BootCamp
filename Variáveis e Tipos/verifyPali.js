// function verifyPali(str) {

// if(!str) return 'Não é um palíndromo';


// return str.split('').reverse().join('') === str;
// }

// var text = 'sussa'
// console.log(verifyPali(text))


function verifyPali(str) {

    if(!str) return 'Não é um palíndromo';
    
    for(let i = 0; i < str.length / 2; i++) {

        if(str[i] !== str[str.length - 1 - i]) {

            return false;
        }

    }

    return true
    }
    

    console.log(verifyPali('ama'))