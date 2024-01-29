const person1 = {
    name : 'Hitesh',
    age : 19,
}

const person2 = {
    name : 'Kumar',
    age : 21,
}

function introduce(){
    console.log(`Hello,I'm ${this.name}, and I'm ${this.age} years old.`);
}



introduce.call(person1);