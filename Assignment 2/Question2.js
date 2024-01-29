const ages = [19,22,19,24,20,25,26,24,25,24]
const length = ages.length


//short the array and find max & min age
ages.sort();
console.log('Shorted ages: ',ages);
let minAge = ages[0];
console.log('Min Age: ',minAge);
let maxAge = ages[length-1];
console.log('Max age: ',maxAge);



// find miedian age(one middle item or two middle items divided by two)
midAge = Math.floor(ages.length/2+1)
ages.length%2==0?console.log('mid1 age : '+ages[4]+'  mid2 age : '+ages[5]):console.log('mid age : ' + ages[midAge]);


//find the average age
let sum = 0
for(let i=0;i<length;i++){
    sum += ages[i];
}
let averageAge = Math.floor(sum/length)
console.log('Average age: ',averageAge);


//find the range
const range = ages[length-1]-ages[0]
console.log('Age range: ',range);


//compare the value
const minDiff = Math.abs(minAge-averageAge);
console.log('Min Difference: ',minDiff);
const maxDiff = Math.abs(maxAge-averageAge);
console.log('Max Difference: ',maxDiff);


