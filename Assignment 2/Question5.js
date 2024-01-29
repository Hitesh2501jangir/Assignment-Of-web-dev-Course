let uniqueItem = new Set([2,3,5,1,3,5,6,7]);

let numberSquare = new Map();

uniqueItem.forEach(num => {
    numberSquare.set(num ,num*num);
});

console.log('Unique Number : ');
console.log(Array.from(uniqueItem).join(', '));

console.log('\nNumber-Square Map : ');
numberSquare.forEach((square,number)=>{
    console.log(`${number} : ${square}`);
});