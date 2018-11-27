'use strict';

function greeter(greet){
    greet('test');

    console.log(greet == Window.hi);
}
const hi = function (name) {
    console.log('Hi' + name);
}
greeter(hi);

greeter(function (name) {console.log('hello' + name)});

/////////////////////////////////////////////////////////////////////////////////////////////////////

const myGreeter = greet => greet('Trainer');
myGreeter(name => console.log(name));
const hi1 = name => console.log('Hi', name);
myGreeter(hi1);

////////////////////////////////////////////////////////////////////////////////////////////////////
/**nested function
 * If ge
 */
const getUser = cb => cb({user:'Sapient'});

const loginUser = (user, loginDetails, resolve, reject) => {
    if(loginDetails.name === user.name && loginDetails.pwd === user.password) {
        resolve(user);
    }else {
        reject('Invalid credentials');
    }
    
}

const login = () => console.log('login');

const handler = user => {
    login(user);
}
getUser(handler);


const getUserAsync = (resolve, reject, loginDetails)=> {
    let mockdata = {
        name: 'Sapient',
        password: 'test'
    };
    if(mockdata) {
        login(mockdata, resolve, reject);
    } else {
        reject(mockdata);
    }
};

const success = (user, loginDetails) => {
   login(user, loginDetails);
    
}

const failure = err => {
    console.log(err);
}


const getUserAsyncDashboard = (resolve, reject) =>{
    let mockdata = {
        name: 'Sapient',
        password: 'test'
    };
    if(mockdata) {
        resolve(mockdata);
    } else {
        reject('Data dont exist');
    }
}
const dashboard = () => {
    getUserAsyncDashboard(data => {
        console.log(`Welcome ${data.name} to deshboard`)
    }, err => {
        console.log(err);
    })
}

getUserAsync(success, failure, {name:'Sapient', pwd: 'test'});

dashboard();
