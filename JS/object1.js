// 객체 object
// 함수, 클래스(틀) =? 객체, 개체, object

// function 틀() {} => new 틀()

function A() {}

const a = new A();

console.log(a,typeof a)
console.log(A());


function B(name,age) {
    console.log(name,age)
}
const b = new B();
const c = new B('Mark', 22);

console.log(B());


// 객체 속성 추가하기 property
// {사용할 데이터, 함수}
//값넣기
function D(name){
    this.name = 'Mark'
}

const d = new D();
console.log(d)

//함수넣기

function F(){
    this.hello = function(){
        console.log('hello')
    };
}

new F().hello();



//
function G(name){
    this.hello = function(){
        console.log('hello',name);
    }
}
new G('Marktub').hello()
//new Function 표준 내장 객체
