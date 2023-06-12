class Product{
    code: number;
    
    constructor(code: number, name: string, price: number){
        this.code = code;
    }
}

class Cart{
    cart = new Map<number, number>();
    
    add(product: Product, quantity: number): void{
        let added = this.cart.get(product.code)
        if(added){
            this.cart.set(product.code, added + quantity)
            return
        }
        this.cart.set(product.code, quantity)
    }

    remove(code: number, quantity: number): void{
        if (this.cart.has(code)){
            if(quantity != null){
                for(let i = 0; i < quantity; i++){
                    this.cart.delete(code);
                }
            } else {
                this.cart.delete(code)
            }  
        }
    }
    
    total(): void{
        console.log(this.cart)
    }
}



const cart = new Cart()
const product1 = new Product(150, 'Camiseta', 20);
const product2 = new Product(200, 'Blusa', 10);
// const product3 = new Product(24, 'Bermuda', 50, 5);
// const product4 = new Product(39, 'Calça', 10, 5);


cart.add(product1, 5);
cart.add(product2, 10);
console.log(cart);
cart.remove(200, 2)
console.log(cart);

// console.log({
//     code:101,
//     name: 'camiseta'
// })
