// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
//
// foo(1, 2, 3, 4, 5);
//
// foo(1);


'use strict';


'use strict';

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school'
// };
// var {name, age, passport} = person;
//
// // name, age, passport分别被赋值为对应属性:
// console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);


var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};

// var name, id;
// 把passport属性赋值给变量id:
let {name, passport:id} = person;
// 注意: passport不是变量，而是为了让变量id获得passport属性:
// passport; // Uncaught ReferenceError: passport is not defined
console.log('name = ' + name + ', id = ' + id );
// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     var y = 'Bob';
// }
// function foo() {
//     var sum = 0;
//     for (let i=0; i<100; i++) {
//         sum += i;
//     }
//     // SyntaxError:
//     i += 1;
//     console.log(i)
// }

// foo();


// function foo() {
//     var y; // 提升变量y的申明，此时y为undefined
//     var x = 'Hello, ' + y;
//     console.log(x);
//     y = 'Bob';
// }

// function foo() {
//     var
//         x = 1, // x初始化为1
//         y = x + 1, // y初始化为2
//         z, i; // z和i为undefined
//     // 其他语句:
//     for (i=0; i<100; i++) {
//
//     }
// }