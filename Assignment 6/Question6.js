function fetchUserDataAndPosts(userID){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`).then(response => response.json()).then(userData => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`).then(response => response.json()).then(posts => ({user: userData, posts}));
    });
}


fetchUserDataAndPosts(1).then(result => console.log(result));