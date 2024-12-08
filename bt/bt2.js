var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(accoutNumber, balance) {
        this.accountNumber = accoutNumber;
        this.balance = balance;
    }
    //tien gui
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("So tien gui khong duoc nho hon hoac bang 0");
            return;
        }
        this.balance += amount;
        console.log("Ban da gui ".concat(amount, " thanh cong, Total: ").concat(this.balance));
    };
    //tien rut
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("So du tien rut phai lon hon 5");
            return;
        }
        if (amount > this.balance) {
            console.log("So du khong du de rut. So du cua ban chi co: ".concat(this.balance));
            return;
        }
        this.balance -= amount;
        console.log("Ban da rut ".concat(amount, " thanh cong, Total: ").concat(this.balance));
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accoutNumber, balance, interestRate) {
        var _this = _super.call(this, accoutNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.calculateInterest = function () {
        var laiSuat = (this.balance * this.interestRate) / 100;
        console.log("Caculated: ".concat(laiSuat));
        return laiSuat;
    };
    return SavingAccount;
}(BankAccount));
var account = new SavingAccount("123", 20000, 5);
account.deposit(500);
account.withdraw(300000);
account.calculateInterest();
