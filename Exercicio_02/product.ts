class Product{
    code: number;
    
    constructor(code: number, name: string, price: number){
        this.code = code;
    }

    // totalPrice(): number {
    //     return this.price * this.quantity;
    //   }
}

class Cart{
    cart: {product: Product; quantity: number}[] = [];
    
    add(product: Product, quantity: number): void{
        this.cart.push({product, quantity});
    }

    // remove(code: number, quantity: number): void{
    //     let index = this.cart.filter(item => item.product.code == code);
    //     if(index > -1){
    //         this.cart.splice(index, 1);
    //     } else{
    //         console.log('Item não econtrado!')
    //     }
    // }

    // total(): number{
    //     let totalCart = 0;
    //     // como funciona
    //     // TotalCart = product1(40)
    //     // TotalCart = product1(40) + product2(20) = 60
    //     for(const products of this.cart){
    //         totalCart += products.totalPrice();
    //     }
    //     return totalCart;
    // }
}


const cart = new Cart()
const product1 = new Product(10, 'camiseta', 20);
const product2 = new Product(15, 'camiseta', 10);
cart.add(product1, 2);
cart.add(product2, 3);
console.log(cart);
// const product2 = new Product(102, 'calça', 10, 2);
// const product3 = new Product(24, 'bermuda', 50, 5);
// const product4 = new Product(39, 'bermuda', 10, 5);

// carrinho.add(product1);
// carrinho.add(product2);
// carrinho.add(product3);
// carrinho.add(product3);
// carrinho.remove(product3);
// carrinho.add(product4);
// console.log(carrinho.total());

// console.log({
//     code:101,
//     name: 'camiseta'
// })

// carrinho.total();
// carrinho.add(product1);
// carrinho.add(product2);
// carrinho.add(product4);
// carrinho.add(product5);
// console.log(carrinho);
// carrinho.remove(product3)
// console.log(carrinho);
// console.log(product1.totalPrice());
// console.log(product1.totalPrice() + product2.totalPrice());
// console.log(carrinho.total());

// console.log(product); // Product { code: 10, name: 'camiseta', price: 20, quantity: 2 }
// product.totalPrice(); //O valor total do produto é de 40.