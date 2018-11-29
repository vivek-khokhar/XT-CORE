
function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    return fetch(url);
}

getUsers()
    .then(respoense => respoense.json().then(res => console.log(res)))
    .catch(err => console.log(err));

