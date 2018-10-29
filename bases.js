var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
console.log(message)

var message = `你好, ${name}, 你今年${age}岁了!`;
console.log(message)



var x = 100;
console.log(x);

console.log('\u4e2d\u6587');


console.log(`多行
字符串
测试`);
console.log('我擦\
你 嗨 啊')


var arr = [10, 20, '30', 'xyz'];
console.log(arr.indexOf(10)); // 元素10的索引为0
console.log(arr.indexOf(20)); // 元素20的索引为1
console.log(arr.indexOf(30)); // 元素30没有找到，返回-1
console.log(arr.indexOf('30')); // 元素'30'的索引为2

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
console.log(arr)