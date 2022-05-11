class BankAcc {

    constructor(agency, number, type, balance) {

        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = balance;
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


class CheckAcc {

    constructor(agency, number, balance, credCard) {

        super(agency, number, balance)

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



class SavingsAcc {

    constructor(agency, number, balance) {

        super(agency, number, balance)
        this.type = 'Savings Account'
    }

}


class UniversityAcc {

    constructor(agency, number, balance) {

        super(agency, number, balance)
        this.type = 'Savings Account'
    }


    withdraw(value) {

        if(value > 500) {

            return 'Operação negada'
        } 

        this._balance = this._balance - value
    }
}





// const recipe = Object.getOwnPropertyNames(new BankAcc)
// console.log(recipe)


// const execute = new BankAcc('Banco do Brasil', 5300, 'Corrente', 50000000)
// const execute2 = new BankAcc('Bradesco', 5100, 'Corrente', 150000000)
// const execute3 = new BankAcc('Itaú', 5020, 'Corrente')


// console.log(execute3)

