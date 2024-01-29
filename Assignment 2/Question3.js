const contactMap = new Map();

contactMap.set('Hitesh',{
    age : 19,
    email : 'hitesh@outlook.com',
    location : 'Jaipur',
})


contactMap.set('Kumar',{
    age : 25,
    email : 'kumar@outlook.com',
    location : 'Delhi',
})


contactMap.set('Johit',{
    age : 28,
    email : 'johit@outlook.com',
    location : 'Patana',
})


contactMap.set('Rajesh',{
    age : 21,
    email : 'rajesh@outlook.com',
    location : 'Pune',
})



function getDetail(name){
    return contactMap.get(name);
}

console.log(getDetail('Hitesh'));