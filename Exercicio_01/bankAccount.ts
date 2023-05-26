class BankAccount {
    historic: number[] = [];
    balance: number = 0;

    deposit(value: number){
        if(value > 0){
            this.balance += value;
            this.historic.push(value);
            console.log(`Depósito de ${value} feito. Saldo de ${this.balance}.`)
        } else{
            console.log('O valor de deposito tem que ser maior que 0.')
        }
    }

    withdraw(value: number){
        if(value > this.balance){
            console.log(`O valor do saque de ${value} é maior que o seu saldo de ${this.balance}.`);
        } else{
            this.balance -= value;
            this.historic.push(-value);
            console.log(`Saque de ${value} realizado! Saldo de ${this.balance}.`);
        }
    }

    viewBalance(){
        console.log(`Seu saldo é de ${this.balance}`);
    }
}

const account = new BankAccount();

account.deposit(100);
account.deposit(20);
account.withdraw(70);
account.withdraw(200);

console.log(account.historic);
account.viewBalance();