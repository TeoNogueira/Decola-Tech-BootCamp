class BankAcc {

    constructor(agency, number, type, balance) {

        this.agency = agency;
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

}


const execute = new BankAcc('Banco do Brasil', 500, 'Corrente', 50000000)
const execute2 = new BankAcc('Bradesco', 5100, 'Corrente', 150000000)
const execute3 = new BankAcc('Itaú', 5020, 'Corrente', 90000000)

console.log(execute2)