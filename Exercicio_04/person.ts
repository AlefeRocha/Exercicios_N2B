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
        
        if(this.friendList.length !== 0){
            return this.friendList.sort((a, b) => b.age - a.age);
        } else {
            return 'Lista de amigos está vazia.';
        }
    }
}