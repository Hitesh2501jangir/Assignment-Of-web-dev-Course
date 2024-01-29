let expenses = [
    {amount : 100, category: 'Utilities'},
    {amount : 200, category: 'Groceries'},
    {amount : 50, category: 'Entertainment'},
];


let totalAmount = expenses.reduce((amou,expense)=> amou + expense.amount,0);


console.log(`Total Expenses : ${totalAmount}`);