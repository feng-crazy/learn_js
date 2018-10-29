'use strict';

'use strict';

'use strict';

var arr = ['1', '2', '3'];
var r;

r = arr.map(parseInt);

console.log(r);


function normalize(arr) {

    return arr.map(function(x){
        x=x.toLowerCase()
        x=x[0].toUpperCase()+x.slice(1)
        return x
    })

}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}



// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth;
//         }
//         return getAgeFromBirth();
//     }
// };
//
// xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined
//
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr)
// arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// console.log(arr)