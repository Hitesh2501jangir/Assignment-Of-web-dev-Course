function multiplyWithCallback(numbers, callback){
    let multiplyiedArray = numbers.map(num => num*2);
    callback(multiplyiedArray);
}


let arr = [2,4,6,8,10];
multiplyWithCallback(arr, result => console.log(result));