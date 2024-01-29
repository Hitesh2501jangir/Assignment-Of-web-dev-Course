// Task 1
const calculator = {
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },
    claculate : function(operation ,a , b){
        if(operation === 'add'){
            return this.add(a,b);
        }
        else if(operation==='subtract'){
            return this.subtract(a,b);
        }
        else if(operation==='multiply'){
            return this.multiply(a,b);
        }
    },
};



// Task 3
const additionResult = calculator.claculate.call(calculator,'add',5,5);
console.log(`Addition Result : ${additionResult}`);



// Task 4
const multiplicationResult = calculator.claculate.apply(calculator,['multiply',2,2]);
console.log(`Multiplication Result : ${multiplicationResult}`);



// Task 5
const discountCalculator = {
    disCountPercentage : 10,
    applyDiscount : function (amount){
        return amount-(amount*this.disCountPercentage)/100;
    },
};



// Task 6
const claculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
const discountedAmount = claculateDiscount(100);
console.log(`Discounted Amount : ${discountedAmount}`);