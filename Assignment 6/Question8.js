function racePromises(promise){
    return Promise.race(promise);
}

let promise1 = new Promise(resolve => {
    setTimeout(() => resolve("Promise1 Resolved"),2000);
});

let promise2 = new Promise((_, reject)=>{
    setTimeout(()=>reject("Promise2 Rejected"),500)
});



racePromises([promise1, promise2]).then(result => console.log(result)).catch(error => console.error(error));