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

        if(this.friendList.length !== 0){
            return this.friendList.sort((a, b) => b.age - a.age);
        } else {
            return 'Lista de amigos está vazia.';
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

console.log(pessoa1.getFriends());
console.log(pessoa2.getFriends());

// result console.log(pessoa1.getFriends());
// [
// Person { name: 'Marcos', age: 42, friendList: [] },
// Person { name: 'Marcos', age: 30, friendList: [] },
// Person { name: 'Maria', age: 28, friendList: [] }, 
// Person { name: 'Stella', age: 26, friendList: [] }
// ]

// result console.log(pessoa2.getFriends());
// Lista de amigos está vazia.