class Product{
    constructor(public code: number, public name: string, public price: number){}
}


interface Item{
    product: Product
    quantity: number
}


class Cart{
    items = new Map<number, Item>();
    
    add(product: Product, quantity: number): void{
        let added = this.items.get(product.code)
        if(added){
            added.quantity += quantity
            return
        }
        this.items.set(product.code, {'product': product, 'quantity': quantity})
    }

    remove(code: number, quantity: number): void{
        if (!this.items.has(code)){
            console.log('Código não encontrado!')
        } 
        
        let item = this.items.get(code);
        let productQuantity = item?.quantity!;
        let product = item?.product!;

        if(quantity <= 0){
            console.log('Por favor, passar uma quantidade válida.')
            return
        } if(quantity < productQuantity!){
            productQuantity! -= quantity;
            this.items.set(code, {'product': product, 'quantity': productQuantity});
        } else {
            this.items.delete(code)
        }   
    }
    
    total(): void{
        if (!this.items.size){
            console.log('Carrinho vazio')
            return
        }

        const totalCart: number = Array.from(this.items.values()).reduce(
            (acc: number, item: Item) => {
                return acc + (item.product.price * item.quantity);
            },0);

        console.log(`O valor total do carrinho é: R$${totalCart}.`);
    }

    summary() {
    const summaryItems = Array.from(this.items, ([_, item]) => ({
        code: item.product.code,
        quantity: item.quantity,
        total: item.product.price * item.quantity,
    }));
    return JSON.stringify(summaryItems);
    }
}