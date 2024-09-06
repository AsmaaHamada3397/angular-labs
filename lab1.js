var Account = /** @class */ (function () {
    function Account(Acc_no, balance) {
        this.Acc_no = Acc_no;
        this.Balance = balance;
    }
    Account.prototype.debitAmount = function () { };
    ;
    Account.prototype.creditAmount = function () { };
    ;
    Account.prototype.getBalance = function () {
        return this.Balance;
    };
    ;
    return Account;
}());
