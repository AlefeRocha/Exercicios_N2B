class Product{
    code: number;
    price: number;
    
    constructor(code: number, name: string, price: number){
        this.code = code;
        this.price = price;
        }
}

interface Item{
    product: Product
    quantity: number
}

class Cart{
    items = new Map<number, Item>();
    
    add(product: Product, quantity: number): void{
        let c = this.items.get(2);
        let added = this.items.get(product.code)
        if(added){
            added.quantity += quantity
            return
        }
        this.items.set(product.code, {'product': product, 'quantity': quantity})
    }

    // remove(code: number, quantity: number): void{
    //     let item = this.items.get(code);
    //     let productQuantity = item?.quantity!;
    //     let product = item?.product!;

    //     if (this.items.has(code)){ // recebe o valor da chave(a quantidade no carrinho) 'code'
    //         if(quantity <= 0){ // valido se é um número negativo
    //             console.log('Por favor, passar uma quantidade válida.')
    //         } if(quantity <= productQuantity!){ // valido se a quantidade passada é menor que a quantidade que já está no carrinho e se é maior que 0
    //             productQuantity! -= quantity;
    //             this.items.set(code, {'product': product, 'quantity': productQuantity});
    //         } else {
    //             this.items.delete(code)
    //         }
    //     } else {
    //         console.log('Código não encontrado!')
    //     }   
    // }

    // Remove refatorado
    remove(code: number, quantity: number): void{
        if (!this.items.has(code)){ // recebe o valor da chave(a quantidade no carrinho) 'code'
            console.log('Código não encontrado!')
            return
        } 
        
        let item = this.items.get(code);
        let productQuantity = item?.quantity!;
        let product = item?.product!;

        if(quantity <= 0){ // valido se é um número negativo
            console.log('Por favor, passar uma quantidade válida.')
            return
        } if(quantity === productQuantity!){ // valido se a quantidade passada é igual a quantidade que já está no carrinho, se sim, exclui do carrinho
            this.items.delete(code)
            return
        } if(quantity < productQuantity!){ // valido se a quantidade passada é menor que a quantidade que já está no carrinho
            productQuantity! -= quantity;
            this.items.set(code, {'product': product, 'quantity': productQuantity});
            return
        } else {
            this.items.delete(code)
        }   
    }
    
    total(): void{
        if (!this.items.size){
            console.log('Carrinho vazio')
            return
        }

        let totalPrice: number = 0;
        let totalCart: number = 0;

        for(let [code, product] of this.items){
            totalPrice = product.product.price * product.quantity;
            totalCart += totalPrice;
        }
        console.log(`O valor total do carrinho é: R$${totalCart}.`);
    }
}



// Instanciando
const cart = new Cart();
const product1 = new Product(111, 'Camiseta', 20);
const product2 = new Product(222, 'Blusa', 10);
// const product3 = new Product(24, 'Bermuda', 50, 5);
// const product4 = new Product(39, 'Calça', 10, 5);


// Adicionando no carrinho
cart.add(product1, 5);
cart.add(product1, 5);
cart.add(product2, 8);
cart.remove(222, 2);
// console.log(cart.items);
// console.log(cart);
cart.total();


// console.log({
//     code: 101,
//     name: 'camiseta'
// })
