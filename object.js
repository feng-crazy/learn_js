var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    'middle-school': 'No.1 Middle School',
    'high-school':'high School',
    height: 1.70,
    weight: 65,
    score: null
};

console.log(xiaoming.name); // '小明'
console.log(xiaoming['name']); // '小明'
console.log(xiaoming.birth); // 1990
console.log(xiaoming['middle-school'])
console.log(xiaoming["middle-school"])

xiaoming['little-shool'] = 'haha'
console.log(xiaoming)

console.log('---------------------------------------------------------------\n\n')

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}