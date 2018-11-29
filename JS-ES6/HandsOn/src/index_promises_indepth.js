'use strict';



const getUser = function (userCredentials) {
    let mockUse = {
        name:'admin'
    }
    const promise = new Promise(function( resolve, reject) {
        if(mockUse){
            setTimeout(_ => {
                resolve({
                    name: 'admin',
                    credentials: userCredentials
                });
            }, 2000);
    } else {
            reject({
                err: 'Something went wrong'
            })
        }
    });
    return promise;
}

const loginUser = function (data) {
    return new Promise((resolve, reject) => {
        if(data.name === data.credentials.name) {
            setTimeout(_ => resolve(data), 2000)
        }else {
            reject({
                err: 'Something went wrong'
            })
        }
    }); 
}

const dashBoard = function(user) {
    const message = `Welcome to dashboard Message ${user.name}`;
    return Promise.resolve(message);
}

    // getUser()    
    // .then(response => {
    //     loginUser(response, {name : 'test'}).then(
    //         data => console.log(data.name))
    //     })
    // .catch(err => console.log(err));
console.log('valid credentials invocation');
    getUser({name : 'admin'})    
    .then(loginUser)
    .then(dashBoard)
    .then(data => console.log(data))
    .catch(err => console.log(err.err));

    console.log('wrong credentials invocation');
    getUser({name : 'test'})    
    .then(loginUser)
    .then(dashBoard)
    .then(data => console.log(data))
    .catch(err => console.log(err.err));


    ///

    console.log('promise chaining');
    new Promise((resolve, reject) => {
        setTimeout(_ => resolve(1), 1000);
    })
    .then((result) => result * 2)
    .then((result) => result * 2)
    .then((result) => result * 2)
    .then((result) => result * 2)
    .then((result) => console.log(result));


    Promise.all([
        new Promise( (resolve, reject) => setTimeout( _ => resolve(10), 3000)),
        new Promise( (resolve, reject) => setTimeout( _ => resolve(999), 2000)),
        new Promise( (resolve, reject) => setTimeout( _ => resolve(777), 1000)),
    ]).then (res => console.log('result', res));

    Promise.all([11,32,112]).then (res => console.log('result', res));

    
    Promise.all([
        new Promise( (resolve, reject) => setTimeout( _ => resolve(10), 3000)),
        new Promise( (resolve, reject) => setTimeout( _ => resolve(999), 2000)),
        new Promise( (resolve, reject) => setTimeout( _ => resolve(777), 1000)),
        new Promise((resolve, reject) =>  setTimeout( _ => reject('reject all promises'), 1000))
    ]).then (res => console.log('result', res))
    .catch(err => console.log(err));