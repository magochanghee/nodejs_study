// 생성자함수로 함수를 만드는 방법
const hello= new Function();

const sum = new Function('a','b','c','return a+b+c');

console.log(sum(1,2,3));


// function과 new Function차이
global.a = 2
{
    const a = 1;
    const test = new Function('return a');
    console.log(test());
    // 지역변수를 사용할수 없다.
}

{
    const a= 2;
    const test = function(){
        return a;
    }
    console.log(test());
}


// arrow function
() => {}

const hello1 = () =>{
    console.log('hello1');
}

hello1()


// 매개변수로

const hello2 = name => {
    console.log('hello2',name)
}

hello2('mango')

const hello3 = (name, age) => {
    console.log('hello3', name,age);
}

hello3('koko',20)

// return

const hello4 = name => {
    return `hello ${name}`;
}
console.log(hello4('gogo'));

const hello5 = name => `hello ${name}`;
console.log(hello5('hoho'));