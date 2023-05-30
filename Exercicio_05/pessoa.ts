class Person{
    name: string;
    age: number;
    email: string;

    constructor(name: string, idade: number, email: string){
        this.name = name;
        this.age = idade;
        this.email = email;
    }
}

class Client extends Person{
    clientID: number;
    registrationDate: Date;
}