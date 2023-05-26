class Transaction{
    date: Date;
    amount: number;
    type: number;

    constructor(date: Date, amount: number, type: number){
        this.date = date;
        this.amount = amount;
        this.type = type;
    }
}