// Muito importante aprender esse conceito para não errar no futuro!


var escopeGlobal = 'Global'


function escopoLocal() {

    console.log(escopeGlobal)
let escLocInternal = 'Local'
console.log(escLocInternal)

}

escopoLocal()


