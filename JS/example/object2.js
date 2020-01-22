// new Object() object로 객체만들기

const a = new Object();

console.log(a, typeof a)

const b = new Object(true);
console.log(b, typeof b)

const c = new Object({name :'Mark', age:25})    //리터럴 객체
console.log(c, typeof c)

// 프로토타입 체인   .prototype 모든 객체를 연결해서 사용할수 있돠

function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello= function() {
    //     console.log('hello', this.name, this.age);
    // };
}

Person.prototype.hello= function(){
    console.log('hello', this.name, this.age)
}


const p = new Person('Chrong', 22);

p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);


console.log(p instanceof Person);
console.log(p instanceof Object);