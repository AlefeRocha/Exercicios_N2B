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

    totalPrice(){
        // const total = this.price * this.quantity
        // console.log(`O valor total do produto é de ${total}.`);
        return console.log(`O valor total do produto é de ${this.price * this.quantity}.`);
      }
}

class Cart{
    cart: Product[] = [];

    add(product: Product){
        this.cart.push(product);
    }

    remove(product: Product){
        const index = this.cart.indexOf(product);
        if(index > -1){
            this.cart.splice(index, 1);
        }
        console.log(index)
    }

    total(){

    }
}


const carrinho = new Cart()
const product1 = new Product(10, 'camiseta', 20, 2);
const product2 = new Product(102, 'calça', 10, 2);
const product3 = new Product(24, 'bermuda', 50, 5);
const product4 = new Product(39, 'bermuda', 10, 5);
const product5 = new Product(42, 'bermuda', 20, 2);

carrinho.add(product1);
carrinho.add(product2);
carrinho.add(product3);
carrinho.add(product4);
carrinho.add(product5);
console.log(carrinho);
carrinho.remove(product3)
console.log(carrinho);

// console.log(product); // Product { code: 10, name: 'camiseta', price: 20, quantity: 2 }
// product.totalPrice(); //O valor total do produto é de 40.