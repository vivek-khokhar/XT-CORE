'use strict';



const getUser = function () {
    let mockUse = {
        name:'admin'
    }
    const promise = new Promise(function( resolve, reject) {
        if(mockUse){
            resolve({
            name: 'admin'
        });
    } else {
            reject({
                err: 'Something went wrong'
            })
        }
    });
    return promise;
}

const loginUser = function (data, credentials) {
    return new Promise((resolve, reject) => {
        if(data.name === credentials.name) {
            resolve(data);
        }else {
            console.log('Invalid Use');
        }
    });

    
    }

    getUser()    
    .then(response => {
        loginUser(response, {name : 'test'}).then(
            data => console.log(data.name))
        })
    .catch(err => console.log(err));

    getUser()    
    .then(response => {
        loginUser(response, {name : 'admin'}).then(
            data => console.log(data.name))
        })
    .catch(err => console.log(err));