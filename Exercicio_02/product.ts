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

    totalPrice(): number {
        // const total = this.price * this.quantity
        // console.log(`O valor total do produto é de ${total}.`);
        return this.price * this.quantity;
      }
}

class Cart{
    cart: Product[] = [];

    add(product: Product){
        this.cart.push(product);
    }

    remove(product: Product){
        // para remover todos os produtos iguais do array

        // for (let i = 0; i < this.cart.length; i++){
        //     console.log(`Estamos no index ${i}`);
        //     if(product === this.cart[i]){
        //         this.cart.splice(i, 1);
        //         console.log(`o valor do index a ser removido é ${i}`);
        //         i = i - 1;
        //     }
        // }

        // let index = this.cart.indexOf(product);  //vai receber o index do produto3
        // while(index !== -1){  //-1 porque se não for achado no array, o indexOf retorna -1
        //     console.log(`Estamos no ${index}.`);
        //     this.cart.splice(index, 1);
        //     index = this.cart.indexOf(product);  //aqui vai receber o index do produto3, mas de outra posição
        //     console.log(index)
        // }

        let index = this.cart.indexOf(product);
        if(index > -1){
            this.cart.splice(index, 1);
        }
    }

    total(): number{
        let totalCart = 0;
        // como funciona
        // TotalCart = product1(40)
        // TotalCart = product1(40) + product2(20) = 60
        for(const products of this.cart){
            totalCart += products.totalPrice();
        }
        return totalCart;
    }

}


const carrinho = new Cart()
const product1 = new Product(10, 'camiseta', 20, 2);
const product2 = new Product(102, 'calça', 10, 2);
const product3 = new Product(24, 'bermuda', 50, 5);
const product4 = new Product(39, 'bermuda', 10, 5);

carrinho.add(product1);
carrinho.add(product2);
carrinho.add(product3);
carrinho.add(product3);
carrinho.remove(product3)
carrinho.add(product4);
console.log(carrinho.total());


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