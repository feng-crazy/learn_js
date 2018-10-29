'use strict';

var arr = ['1', '2', '3'];
var r;

r = arr.map(Number);

console.log(r);


'use strict';

function normalize(arr) {

    return arr.map(function(x){
        x=x.toLowerCase();
        x=x[0].toUpperCase()+x.slice(1);
        return x;
    })

}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});

console.log(r)