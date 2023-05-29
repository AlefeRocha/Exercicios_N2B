class Person{
    name: string;
    age: number;
    friendList: Person[];

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.friendList = [];
    }

    addFriend(friend: Person){
        this.friendList.push(friend);
    }

    getFriends(){
        // return this.friendList.sort((a, b) => b.age - a.age);

        // if(this.friendList.length !== -1){
        //     this.friendList.sort((a: Person, b: Person) => {
        //         return b.age - a.age;
        //     });
        // } else {
        //     console.log('Lista de amigos está vazia.');
        // }
        
        //return this.friendList;

        if(this.friendList.length !== -1){
            return this.friendList.sort((a, b) => b.age - a.age);
        } else {
            return console.log('Lista de amigos está vazia.');
        }
    }
}



let pessoa1 = new Person('Alefe', 31);
let pessoa2 = new Person('Maria', 28);
let pessoa3 = new Person('Stella', 26);
let pessoa4 = new Person('Marcos', 30);
let pessoa5 = new Person('Marcos', 42);

pessoa1.addFriend(pessoa2);
pessoa1.addFriend(pessoa3);
pessoa1.addFriend(pessoa4);
pessoa1.addFriend(pessoa5);
// pessoa2.addFriend(pessoa1);
// pessoa2.addFriend(pessoa3);

// console.log(pessoa1.friendList);
// console.log(pessoa2.friendList);
// console.log(pessoa3.friendList);
console.log(pessoa1.getFriends());
console.log(pessoa2.getFriends());
