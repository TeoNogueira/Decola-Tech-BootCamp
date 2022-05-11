class BankAcc {

    constructor(agency, number, type) {

        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }


    get balance() {

        return this._balance
    }


    set balance(value) {
        this._balance = value

        return "Operation denied!"

    }

    withdraw(value) {

        this._balance = this._balance - value
    }
}


class CheckAcc extends BankAcc {

    constructor(agency, number, credCard) {

        super(agency, number)

        this.type = 'Check Account'
        this._creditCard = credCard
    }


    get creditCard() {
        return this._creditCard

    }


    set creditCard(value) {

        return this._creditCard = value 

    }
}



class SavingsAcc extends BankAcc {

    constructor(agency, number) {

        super(agency, number)
        this.type = 'Savings Account'
    }

}


class UniversityAcc extends BankAcc {

    constructor(agency, number) {

        super(agency, number)
        this.type = 'Savings Account'
    }


    withdraw(value) {

        if(value > 500) {

            return 'Operação negada'
        } 

        this._balance = this._balance - value
    }
}





// const myAccount =  JSON.stringify(new CheckAcc('Bradesco', 50022322, 'Corrent'))

const myAccount =  new CheckAcc('Banco do STA', 50022322, 'Corrent')
const savingsAcc =  new CheckAcc('Banco do ITIR', 30022322, 'Corrent')

savingsAcc.deposit = 509999

savingsAcc.withdraw(700)
console.log(savingsAcc)

myAccount.deposit = 5000

myAccount.withdraw(600)
// console.log(myAccount)
// console.log(myAccount.balance)




// document.body.innerHTML = myAccount


// const recipe = Object.getOwnPropertyNames(new BankAcc)
// console.log(recipe)


// const execute = new BankAcc('Banco do Brasil', 5300, 'Corrente', 50000000)
// const execute2 = new BankAcc('Bradesco', 5100, 'Corrente', 150000000)
// const execute3 = new BankAcc('Itaú', 5020, 'Corrente')


// console.log(execute3)

