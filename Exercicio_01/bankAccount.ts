class BankAccount {
    historic: number[] = [];
    balance: number = 0;

    deposit(value: number){
        if(value > 0){
            this.balance += value;
            this.historic.push(value);
            console.log(`Depósito de R$${value} feito. Saldo de R$${this.balance}.`)
        } else{
            console.log('O valor de depósito tem que ser maior que 0.')
        }
    }

    withdraw(value: number){
        if(value > this.balance){
            console.log(`O valor do saque de R$${value}, é maior que o seu saldo de R$${this.balance}.`);
        } else{
            this.balance -= value;
            this.historic.push(-value);
            console.log(`Saque de R$${value} realizado! Saldo de R$${this.balance}.`);
        }
    }

    viewBalance(){
        console.log(`Seu saldo é de R$${this.balance}.`);
    }
}


// Instanciando
const account = new BankAccount();

account.deposit(100);
account.deposit(20);
account.withdraw(70);
account.withdraw(200);

// Log
console.log(account.historic);
account.viewBalance();

// Resultados
// Depósito de R$100 feito. Saldo de R$100.
// Depósito de R$20 feito. Saldo de R$120.
// Saque de R$70 realizado! Saldo de R$50.
// O valor do saque de R$200, é maior que o seu saldo de R$50.
// [ 100, 20, -70 ]
// Seu saldo é de R$50.