async function getUser() {
    return Promise.resolve({
        id: 2,
        name: 'Async function'
    })
}

getUser().then(res => console.log(res));

async function getValue() {
    return 10;
}

getValue().then( res => console.log(res));

async function fun () {
    let promise = new Promise((resolve, reject) => {
        setTimeout(_ => resolve("done!"), 1000);
    });
    let result = await promise;
    console.log(result);
}

fun();

console.log('outside');

async function getUsers(url) {
    const response = await fetch(url);
    const body = await response.json();
    return body;
}
getUsers("https://jsonplaceholder.typicode.com/users").then(res => console.log(res));

class waiter {
    async wait() {
        return await Promise.resolve(13333);
    }
}

new waiter()
    .wait()
    .then(res => console.log(res));


    async function errorHandler() {
        try {
            let result1 = await Promise.resolve('test 1');
            console.log(result1);
            let response = await fetch('http://testurl');
        } catch (error) {
            console.log(error)
        }finally{
            console.log('Code completed');
        }
    }

    errorHandler().then(co => console.log(co)).catch(er => console.log(er));
