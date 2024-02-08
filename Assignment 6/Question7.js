function fetchMultipleData(urls){
    let promise = urls.map(url => {
        fetch(url).then(response => response.json());
    });
    return Promise.all(promise);
}


const urlsFetch = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
];



fetchMultipleData(urlsFetch).then(responses => console.log(responses));