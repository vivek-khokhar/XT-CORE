'use strict'
// es5
function getX(param) {
    var cache ;
    return (param) => {
        cache = cache || {};
        if(cache[param]) {
            return `${cache[param]} value already cached`;
        }else {
            cache[param] = param;
            return `${cache[param]} value  cached in memory`;
        }
    }

    //return chacheObject;

}



function getY(param) {
    let cache = new Map();
    return (param) => {
        if(cache.get(param)) {
            return `${cache.get(param)} value already cached`;
        }else {
            cache.set(param, param);
            return `${cache.get(param)} value  cached in memory`;
        }
    }
}

let test = getX();
let test6 = getY();

console.log(test('test'));
//test value  cached in memory

console.log(test6('test'));

//test value  cached in memory

console.log(test('test'));
// test value already cached

console.log(test6('test'));
// test value already cached


