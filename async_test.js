// function getSomething() {
//     var r = 0;
//     setTimeout(function() {
//         r = 2;
//     }, 10);
//     return r;
// }
//
// function compute() {
//     var x = getSomething();
//     console.log(x * 2);
// }
// compute();
//
//
// function getSomething1(cb) {
//     var r = 0;
//     setTimeout(function() {
//         r = 2;
//         cb(r);
//     }, 10);
// }
//
// function compute1(x) {
//     console.log(x * 2);
// }
// getSomething1(compute1);


// function getSomething2() {
//     var r = 0;
//     setTimeout(function() {
//         r = 2;
//         console.log('B');
//         it.next(r);
//         console.log('C');
//     }, 2000);
// }
//
// function *compute2(it) {
//     console.log('A');
//     var x = yield getSomething2();
//     console.log('D');
//     console.log(x * 2);
// }
// var it = compute2();
// it.next();


// function getSomething() {
//     var r = 0;
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             r = 2;
//             resolve(r);
//         }, 10);
//     });
// }
//
// function *compute() {
//     console.log('A');
//     var x = yield getSomething();
//     console.log('B');
//     console.log(x * 2);
// }
// var it = compute();
// console.log('C');
// it.next().value.then(function(value) {
//     console.log('D');
//     it.next(value);
//     console.log('E');
// });



function getSomething() {
    var r = 0;
    console.log('c')
    return new Promise(function(resolve) {
        setTimeout(function() {
            r = 2;
            console.log('d')
            resolve(r);
        }, 2000);
    });
}

async function compute() {
    console.log('A')
    var x = await getSomething();
    console.log('b')
    console.log(x * 2);
}
compute();