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

    remove(code: number, quantity?: number): void{
        if (this.cart.has(code)){
            let productQuantity: number = this.cart.get(code)!; // recebe o valor da chave(a quantidade no carrinho) 'code'
            if(quantity! < 0){ // valido se é um número negativo
                console.log('Por favor, passar uma quantidade válida.')
                } if(quantity! < productQuantity && quantity! > 0){ // valido se a quantidade passada é menor que a quantidade que já está no carrinho e se é maior que 0
                    let newQuantity: number = productQuantity - quantity!;
                    this.cart.set(code, newQuantity);
                } else {
                    this.cart.delete(code)
                }
        } else {
            console.log('Código não encontrado!')
        }   
    }

    // totalPrice(product: Product){
    //     console.log(this.cart.)
    // }
    
    total(): void{
        let totalCart = 0;
        for(let [code, quantity] of this.cart){
            console.log(`Código ${code} e quantidade ${quantity}`)
        }
        // console.log(this.cart)
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
cart.remove(200, 2);
console.log(cart);
cart.total();

// console.log({
//     code:101,
//     name: 'camiseta'
// })
