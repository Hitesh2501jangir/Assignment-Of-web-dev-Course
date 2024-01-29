// Task 1
function displayInfo(name, role){
    console.log(`Name: ${name}, Role: ${role}`);
}



// Task 2
displayInfo.call(null,"Hitesh","Student");



// Task 3
displayInfo.apply(null,['Kumar','Engg.']);



// Task 4
function greet(){
    console.log(`Hello, ${this.name}`);
}



// Task 5
const person = {name : 'Rajesh'};
const Gree = greet.bind(person);
Gree();