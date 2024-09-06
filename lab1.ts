interface IAccount {
    dateOfOpening: Date;

    addCustomer(customer: string): void;
    removeCustomer(customer: string): void;
    debitAmount(amount: number): void;
    creditAmount(amount: number): void;
    getBalance(): number;
}

class Account implements IAccount {
    protected accNo: string;  
    protected balance: number; 
    public dateOfOpening: Date;

    constructor(accNo: string, initialBalance: number, dateOfOpening: Date) {
        this.accNo = accNo;
        this.balance = initialBalance;
        this.dateOfOpening = dateOfOpening;
    }

    addCustomer(customer: string): void {}

    removeCustomer(customer: string){}

    debitAmount(amount: number){}

    creditAmount(amount: number){}

    getBalance(): number {
        return this.balance;
    }
}


class SavingAccount extends Account {
    minBalance: number;

    constructor(accNo: string, initialBalance: number, dateOfOpening: Date, minBalance: number) {
        super(accNo, initialBalance, dateOfOpening);
        this.minBalance = minBalance;
    }

    debitAmount(amount: number): void {
     
    }
}


class CurrentAccount extends Account {
    interestRate: number; 

    constructor(accNo: string, initialBalance: number,
         dateOfOpening: Date, 
         interestRate: number) {
        
            super(accNo, initialBalance, dateOfOpening);
            this.interestRate = interestRate;
    }

  
}