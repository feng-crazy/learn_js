// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

console.log(Student);

Student.run();

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    console.log(s.name);
    console.log(s.height);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
console.log(xiaoming);
xiaoming.run(); // 小明 is running...
console.log(xiaoming.height);



if(xiaoming.__proto__ === Student)
    console.log('xiaoming is student');

a = new Object(Student);

console.log(Student.prototype);
console.log(a.prototype);
console.log(xiaoming.prototype);