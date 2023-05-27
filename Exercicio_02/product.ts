class Product{
    code: number;
    name: string;
    price: number;
    quantity: number;

    constructor(code: number, name: string, price: number, quantity: number){
        this.code = code;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // totalPrice(price: number, quantity: number){
    //     this.price = price;
    //     this.quantity = quantity;
    //     const total = quantity * price;
    //     console.log(`O valor total do produto é de ${total}.`)
    // }

    totalPrice(){
        const total = this.price * this.quantity
        console.log(`O valor total do produto é de ${total}.`);
      }
}

const product = new Product(10, 'camiseta', 20, 2);
console.log(product); // Product { code: 10, name: 'camiseta', price: 20, quantity: 2 }
product.totalPrice(); //O valor total do produto é de 40.