function sumAsync(a,b,callback){
    setTimeout(()=>{
        let result = a + b;
        callback(result);
    },1000);
}


sumAsync(2,3,(result)=>console.log(result));