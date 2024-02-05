let order = {
    orderId : '123456',
    productName : 'Laptop',
    quantity : 2,
};


// destructuring

let {orderId,productName,quantity} = order;
console.log(`Order ID : ${orderId}`);
console.log(`Product Name : ${productName}`);
console.log(`Quantity : ${quantity}`);