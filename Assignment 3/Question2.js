function newNumber(){
    let num = Math.floor(Math.random()*10000);
    console.log(num);
}

function callWithDelay(){
    newNumber();
    setInterval(newNumber, 2000);
}

callWithDelay();