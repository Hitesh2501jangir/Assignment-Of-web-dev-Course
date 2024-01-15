let card = "debit";
switch(card){
    case "credit":
        console.log("Fees = 2%");
        break;
    case "debit":
        console.log("Fees = 1.5%");
        break
    case "paypal":
        console.log("fees = 3%");
        break
    default :
        console.log("Invalid card");
    
}