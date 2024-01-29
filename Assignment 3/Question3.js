let expenses = [
    {amount : 100, category: 'Utilities'},
    {amount : 200, category: 'Groceries'},
    {amount : 50, category: 'Entertainment'},
];


let arrayWithTax = expenses.map((expense)=>{
    let tax = (expense.amount*10)/100;
    return {...expenses,tax:tax};
});


console.log('Expense with tax : ',arrayWithTax);