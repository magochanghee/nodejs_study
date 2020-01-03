// new Function();      �������Լ�

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
// arrow function������ this�� ����Ҽ� ����.
const Cat = (name,age) => {
    console.log(this)
    this.name = name;
    this.age = age;
}

const c =new Cat('aer',10);
*/

// �Լ��ȿ��� �Լ��� ����� ����

function Plus(base) {
    return function(num){
        return base + num;
    }
}

const plus5 = Plus(5);
console.log(plus5(10))


// �Լ��� ȣ���� ��, ���ڷ� �Լ��� ���
function hello(c) {
    console.log('hello');
    c();
}

hello(function() {
    console.log('callback');
});

