let {longPromise,shortPromise} = require ('./promise.js');

/**
 * Classic chaining
 */
longPromise()
    .then((data)=>{
        console.log(data); // logs: longPromise resolved
        shortPromise()
            .then((data)=>{
                console.log(data) // logs: shortPromise resolved
            })
            .catch((data)=>{
                console.log(data) // logs: shortPromise rejected
            })
    .catch((data)=>{
        console.log(data) // logs: longPromise rejected

        // shortPromise is unhandled in case longPromise was rejected
    });
});

/**
 * Aggregating in an array, using the all() method
 */
// Promise.all([longPromise(), shortPromise()]).then(function(data) {
//     console.log(JSON.stringify(data));
// });


/**
 * Simplified use with async await
 */
// (async ()=>{
//     let long = await longPromise();
//     let short = await shortPromise();
//
//     console.log(long);   // logs: longPromise resolved
//     console.log(short);  // logs: shortPromise resolved
// })();