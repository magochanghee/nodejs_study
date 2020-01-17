//맴버 변수

class A {
    constructor(name,age){ 
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark',22));


//calss field 런타임 확인

class B{
    name;
    age;
}
console.log(new B())

class C{
    name = 'no name';
    age = 0;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('tube',12))


//맴버 함수

class D{
    hello1(){
        console.log('hello 1',this );
    }
    hello2 = () =>{
        console.log('hello 2',this );
    }
}

new D().hello1();
new D().hello2();

class E {
    name = 'Mark';
    hello(){
        console.log('hello',this.name);
    }
}

new E().hello();

