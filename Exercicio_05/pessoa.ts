class Person{
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class Client extends Person{
    clientID: number;
    registrationDate: Date;
    
    constructor(name: string, age: number, email: string, clientID: number, registrationDate: Date){
        super(name, age, email);
        this.clientID = clientID;
        this.registrationDate = registrationDate;
    }

    get dataClient(){
        return {
            name: this.name,
            age: this.age,
            email: this.email,
            clientID: this.clientID,
            registrationDate: this.registrationDate,
        }
    }
}


const clienteJoao = new Client('João', 30, 'joao@gmail.com', 2525, new Date('2023-05-30'));

console.log(clienteJoao.dataClient);

// result:
// {
//     name: 'João',
//     age: 30,
//     email: 'joao@gmail.com',
//     clientID: 2525,
//     registrationDate: 2023-05-30T00:00:00.000Z
//   }