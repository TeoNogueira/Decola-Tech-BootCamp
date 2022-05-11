function calc() {
const operation = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)\n');


if(!operation || operation > 6) {

alert('Erro - operação inválida')
calc()
} else {

    let n1 = prompt('Insira o primeiro valor:')
    let n2 = prompt('Insira o segundo valor:')
    let result;
    
    function soma() {
    result = Number(n1) + Number(n2);
    alert(`${n1} + ${n2} = ${result}`)
    document.body.innerHTML = result
    
    }
    function subtr() {
    result = n1 - n2;
    alert(`${n1} - ${n2} = ${result}`)
    document.body.innerHTML = result
    
    }
    function mult() {
    result = n1 * n2;
    alert(`${n1} * ${n2} = ${result}`)
    document.body.innerHTML = result
    
    }
    function divReal() {
    result = n1 / n2;
    alert(`${n1} / ${n2} = ${result}`)
    document.body.innerHTML = result
    
    }
    function divInt() {
    result = n1 % n2;
    alert(`${n1} % ${n2} = ${result}`)
    document.body.innerHTML = result
    
    }
    function poten() {
    result = n1 ** n2;
    alert(`${n1} ** ${n2} = ${result}`)
    document.body.innerHTML = result
    
    }
    
    
    function newOperation() {
    
        let option = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')
    
        if(option == 1) {
    
            calc()
    
        } else if(option == 2) {
    
            alert('Até mais!')
        } else {
    
            alert('Digite uma opção válida!');
            newOperation()
        }
    
    }
    
    newOperation()

    /// Posso também usar switch no lugar dos ifs
    
    if(operation == 1) {
          soma()      
        } else if(operation == 2) {
        
            subtr()
        } else if(operation == 3) {
        
            mult()
        
        } else if( operation == 4) {
        
            divReal()
        
        } else if(operation == 5) {
        
            divInt()
        } else if( operation == 6) {
        
            poten()
        }

}

    

}


calc()