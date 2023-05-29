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
        
    }
}

let pessoa1 = new Person('Alefe', 31);
let pessoa2 = new Person('Maria', 28);
let pessoa3 = new Person('Stella', 26);
let pessoa4 = new Person('Marcos', 30);

pessoa1.addFriend(pessoa2);
pessoa1.addFriend(pessoa3);
pessoa1.addFriend(pessoa4);
pessoa2.addFriend(pessoa1);
pessoa2.addFriend(pessoa1);
pessoa2.addFriend(pessoa3);

console.log(pessoa1.friendList);
console.log(pessoa2.friendList);
console.log(pessoa3.friendList);

// console.log(pessoa2);
// console.log(addFriend);