let originalNumbers = [2,5,8,10,3];

originalNumbers.forEach((num, i , arr)=> {
    arr[i] = num*2;
});

console.log('Changed Array : ',originalNumbers);