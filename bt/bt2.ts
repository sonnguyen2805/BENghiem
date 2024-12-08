class BankAccount {
    accountNumber: string;
    balance: number;
    constructor(accoutNumber: string, balance: number) {
        this.accountNumber = accoutNumber;
        this.balance = balance;
    }

    //tien gui
    deposit(amount: number): void{
        if(amount <= 0){
            console.log(`So tien gui khong duoc nho hon hoac bang 0`);
            return;
        }
        this.balance+=amount;
        console.log(`Ban da gui ${amount} thanh cong, Total: ${this.balance}`);
    }
    //tien rut
    withdraw(amount: number): void{
        if(amount <= 0){
            console.log(`So du tien rut phai lon hon 5`);
            return;
        }
        if(amount > this.balance){
            console.log(`So du khong du de rut. So du cua ban chi co: ${this.balance}`);
            return;
        }
        this.balance -= amount;
        console.log(`Ban da rut ${amount} thanh cong, Total: ${this.balance}`);
    }
}

class SavingAccount extends BankAccount{
    interestRate: number; // Lai suat
    constructor(accoutNumber: string, balance: number, interestRate: number){
        super(accoutNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        const laiSuat = (this.balance * this.interestRate) / 100;
        console.log(`Caculated: ${laiSuat}`);
        return laiSuat;
    }
}

const account = new SavingAccount("123", 20000, 5);
account.deposit(500);
account.withdraw(300000);
account.calculateInterest();