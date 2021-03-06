// 프로토타입 확장, 상속

function Person() {}

Person.prototype.hello = function(){
    console.log('hello');
}

function Korean(region){
    this.region = region;
    this.where = function(){
        console.log('where', this.region);
    }
}

Korean.prototype = Person.prototype

const k = new Korean('seoul')

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);


// 객체 리터럴
const a = {}; 

console.log(a, typeof a);

const b = {
    name: 'Mark'
};

console.log(b, typeof b);

const c = {
    name: 'Mark',
    hello1(){
        console.log('hello1',this.name);
    },
    hello2: function() {
        console.log('hello2',this.name);
    },
    hello3: () =>{
        console.log('hello3',this.name); //undefined
    }
};

c.hello1();
c.hello2();
c.hello3();