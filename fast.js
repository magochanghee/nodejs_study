// 프로토타입 확장

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