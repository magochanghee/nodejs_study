// new Function();     생성자 함수

function Person(name, age){
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Mark',38);

console.log(p, p.name, p.age);

const a = new Person('angoe',33);
console.log(a,a.name, a.age);
/*
// arrow function에서는 this를 사용할수 없다.
const Cat = (name,age) => {
    console.log(this)
    this.name = name;
    this.age = age;
}

const c =new Cat('aer',10);
*/

// 함수안에서 함수를 만들어 리턴

function Plus(base) {
    return function(num){
        return base + num;
    }
}

const plus5 = Plus(5);
console.log(plus5(10))


// 함수를 호출할 때, 인자로 함수를 사용
function hello(c) {
    console.log('hello');
    c();
}

hello(function() {
    console.log('callback');
});

