'use strict';



// 选择<p>JavaScript</p>:
var js = document.getElementById('test-p');
console.log(js);

// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = document.getElementsByClassName('c-red c-green')[0].children;
console.log(arr);

// 选择<p>Haskell</p>:
var haskell = document.getElementsByClassName('c-green')[1].lastElementChild;
console.log(haskell);

// var js = document.getElementById('test-p');
// var arr = document.getElementsByClassName('c-red c-green')[0].getElementsByTagName('p');
// var haskell = document.getElementsByClassName('c-green')[1].getElementsByTagName('p')[1];

// // 选择<p>JavaScript</p>:
// var js = document.getElementById('test-p');
//
// // 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
// var arr = document.querySelector('.c-green').querySelectorAll('p');
//
// // 选择<p>Haskell</p>:
// var haskell = document.getElementById('test-div').lastElementChild.lastElementChild;


// 测试:

if (!js || js.innerText !== 'JavaScript') {
    alert('选择JavaScript失败!');
} else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
    console.log('选择Python,Ruby,Swift失败!');
} else if (!haskell || haskell.innerText !== 'Haskell') {
    console.log('选择Haskell失败!');
} else {
    console.log('测试通过!');
}



var jqxhr = $.ajax('/api/categories', {
    dataType: 'json'
}).done(function (data) {
    ajaxLog('成功, 收到的数据: ' + JSON.stringify(data));
}).fail(function (xhr, status) {
    ajaxLog('失败: ' + xhr.status + ', 原因: ' + status);
}).always(function () {
    ajaxLog('请求完成: 无论成功或失败都会调用');
});