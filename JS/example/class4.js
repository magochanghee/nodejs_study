//extends 클래스의 상속

class Parent{
    name = 'lee'
    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{
}

const p = new Parent();
const c = new Child();
console.log(p, c)

c.hello();
c.name = 'tuba'
c.hello();


// override 클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가

class Parent_2 {
    name = 'lee'
    hello(){
        console.log('hello',this.name);
    }
}

class Child_2 extends Parent_2{
    age = 20;
    hello(){
        console.log('hello', this.name, this.age);
    }
}
const p_2 = new Parent_2();
const c_2 = new Child_2();

console.log(p_2,c_2)
c_2.hello();

//super

class Parent_3{
    name;
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log('hello',this.name)
    }
}

class Child_3 extends Parent_3{
    age;

    constructor(name,age){
        super(name)
        this.age = age;
    }
    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p_3 = new Parent_3('mark');
const c_3 = new Child_3('tuba',22);

console.log(p_3,c_3);

c_3.hello()

//static  클래스의 상속 static

class A{
    static age = 33;
}

class B extends A{}

console.log(A.age, B.age);