// process.nextTick(function () {
//     console.log('nextTick callback!');
// });
// console.log('nextTick was set!');
//
// process.on('exit', function (code) {
//     console.log('about to exit with code: ' + code);
// });



var a=0

function b() {
    a = 2
    console.log('exe b',a)

}

// setTimeout(b,1000)
//
// function sleep(delay) {
//     var start = (new Date()).getTime();
//     while ((new Date()).getTime() - start < delay) {
//         continue;
//     }
// }
//
// sleep(4000)


b()
console.log(a)