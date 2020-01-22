//get, set public한 접근
class A {
    _name = 'no name';

    get name() {
        return this._name +'@@@';
    }
    set name(value){
        this._name = value + '!!!'
    }
}

const a = new A();      //setter
console.log(a)

a.name = 'Mark'
console.log(a);
console.log(a.name);    //getter
console.log(a._name);

class B {               //read Only
    _name  = 'no name';

    get name(){
        return this._name +'@@@@';
    }
}

const b = new B();
console.log(b)
b.name = 'mark'     //setter 가 먹히지 않움
console.log(b)



//static 변수, 함수
//객체가 아니고 클래스를 변수화 함수를 사용하는 방식
class C{
    static age = 30;
    static hello() {
        console.log(C.age);
    }
}

console.log(C, C.age);
C.hello();

//잘못된 접근
class D {
    age = 30;
    static hello(){
        console.log(this.age);
    }
}
console.log(D, D.age)
D.hello();


class E{
    static name = '이 클래스의 이름은 E가 아니다';

}
console.log(E)