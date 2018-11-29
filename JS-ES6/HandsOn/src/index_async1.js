// async code

function getUser(cb) {
    setTimeout(function () {cb({name:'admin'})}, 2000);
}
console.log('start');
getUser(function(response){
    console.log(response);
});
console.log('end');
// es6
console.log('ES6 start');
const getUser1 = (cb) => {
    setTimeout(function () {cb({name:'admin'})}, 2000);
}
console.log('start');
getUser1((response) =>{
    console.log(response);
});
console.log('end');

// with promise 
console.log('promise start');

const getUserPromis = _ => {
    const mockUser = {
        name: 'async promises'
    };
    return new Promise((resolve, reject) => {
        mockUser ? setTimeout( () => resolve(mockUser), 2000) : reject({err: 'failsed'})
    })
}
getUserPromis()
    .then(response => console.log(response))
    .catch(err => console.log(err));

    console.log('promise end');