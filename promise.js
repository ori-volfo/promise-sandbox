exports.longPromise = ()=>{
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('longPromise resolved');
            // reject('longPromise rejected');
        }, 10000);
    })
};

exports.shortPromise = ()=> {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('shortPromise resolved');
            // reject('shortPromise rejected');
        }, 2000);
    })
};

