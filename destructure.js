const person = { name: 'jack', age: 21, job: 'actor'};
const { age, name, job } = person;
console.log(job, name, age);


//from array

const friends = ['hasib', 'emon', 'shoeb'];
const [chotoFriend, ...restfriend] = friends;
console.log(chotoFriend,restfriend);

//complex object
const complexObject = {
    name: 'abc',
    info:{
        address : 'kola-bagan',
        leader: 'Shomshu',
    }
}
const {leader} = complexObject.info;
console.log(leader);