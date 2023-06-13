class Product{
    code: number;
    price: number;
    
    constructor(code: number, name: string, price: number){
        this.code = code;
        this.price = price;
        }
}

// function getPrice(code: number){
//     let productPrice = this.items.get(code.price);
//     return productPrice;
// }

class Cart{
    items = new Map<number, number>();
    
    add(product: Product, quantity: number): void{
        let added = this.items.get(product.code)
        console.log(added);
        if(added){
            this.items.set(product.code, added + quantity)
            return
        }
        this.items.set(product.code, quantity)
    }

    remove(code: number, quantity?: number): void{
        if (this.items.has(code)){
            let productQuantity: number = this.items.get(code)!; // recebe o valor da chave(a quantidade no carrinho) 'code'
            if(quantity! < 0){ // valido se é um número negativo
                console.log('Por favor, passar uma quantidade válida.')
                } if(quantity! < productQuantity && quantity! > 0){ // valido se a quantidade passada é menor que a quantidade que já está no carrinho e se é maior que 0
                    let newQuantity: number = productQuantity - quantity!;
                    this.items.set(code, newQuantity);
                } else {
                    this.items.delete(code)
                }
        } else {
            console.log('Código não encontrado!')
        }   
    }
    
    total(): void{
        let totalCart = 0;
        for(let [code, quantity] of this.items){
            let totalPrice = code;

            console.log(code);
            console.log(quantity);
            console.log(totalPrice);
            totalCart += totalPrice * quantity;
        }
        console.log(`O valor total do carrinho é: R$${totalCart}.`);
        // console.log(this.items)
    }
}



// instanciando
const cart = new Cart()
const product1 = new Product(111, 'Camiseta', 20);
const product2 = new Product(222, 'Blusa', 10);
// const product3 = new Product(24, 'Bermuda', 50, 5);
// const product4 = new Product(39, 'Calça', 10, 5);


// Adicionando no carrinho
cart.add(product1, 5);
cart.add(product2, 10);
// cart.remove(200, 2);
console.log(cart);
console.log(product1.price);
cart.total();



// console.log({
//     code: 101,
//     name: 'camiseta'
// })
