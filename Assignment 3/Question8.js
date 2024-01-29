let originalNumbers = [2,5,8,10,3];

let evenArray = [];

originalNumbers.forEach((num)=>{
    if(num%2==0){
        evenArray.push(num);
    }
})


console.log('Even array : ',evenArray);