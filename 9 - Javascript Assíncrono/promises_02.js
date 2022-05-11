async function resolvePromise(){

const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve(console.log('Resolvida'));

    }, 1500);
});

const resolved = await myPromise
.then((result) => result + console.log('passando pelo then'))
.then((result) => result + console.log('e agora acabou!'))
.catch((err) => console.log(err.message));

return resolved;

}

resolvePromise();