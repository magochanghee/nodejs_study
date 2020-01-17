//선언적 방식
class A {}
console.log(new A());

//class 표현식을 변수에 할당

const B = class {};
console.log(new B());


//constructor 생성자 함수
class C {
    constructor() {
        console.log('constructor')
    }
}
console.log(new C());

class D{
    constructor(name, age){
        console.log('constructor',name,age);
    }
}
console.log(new C('Mark',22));
