'use Strict'

const getUser = () => {
    let mockUse = {
        name:'admin'
    }
    const promise = new Promise(function( resolve, reject) {
        if(!mockUse){
            mockUse = "";
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
};

// const promise = getUser();
// promise.then(function(response) {
//     console.log(response);
// });
// promise.catch(function(err){
//     console.log(err);
// })

getUser()    
    .catch(err => console.log(err))
    .then(response => console.log(response))
    .finally(() => console.log('done'));

