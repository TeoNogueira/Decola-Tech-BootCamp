class BankAcc {

    constructor(agency, number, type, balance) {

        this.agency = agency;
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

}


const execute = new BankAcc('Banco do Brasil', 500, 'Corrente', 50000000)


console.log(execute)