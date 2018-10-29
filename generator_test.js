
'use strict';
function* next_id() {

    var current_id = 0;
    while(1){
        yield ++current_id;
    }

}


// 测试:
var x, pass = true,
    g = next_id();
for (x = 1; x < 10; x ++) {
    console.log(g.next().value) ;
}


function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}


var  f = foo(5);

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());



'use strict'

function* fib(max) {
    var a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

for (var x of fib(10)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}