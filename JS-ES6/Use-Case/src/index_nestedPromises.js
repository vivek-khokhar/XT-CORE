'use strict';



const getUser = function (userCredentials) {
    let mockUse = {
        name:'admin'
    }
    const promise = new Promise(function( resolve, reject) {
        if(mockUse){
            resolve({
            name: 'admin',
            credentials: userCredentials
        });
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
            resolve(data);
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

    getUser({name : 'admin'})    
    .then(loginUser)
    .then(dashBoard)
    .then(data => console.log(data))
    .catch(err => console.log(err.err));

    getUser({name : 'test'})    
    .then(loginUser)
    .then(dashBoard)
    .then(data => console.log(data))
    .catch(err => console.log(err.err));