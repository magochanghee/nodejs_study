// �������Լ��� �Լ��� ����� ���
const hello= new Function();

const sum = new Function('a','b','c','return a+b+c');

console.log(sum(1,2,3));


// function�� new Function����
global.a = 2
{
    const a = 1;
    const test = new Function('return a');
    console.log(test());
    // ���������� ����Ҽ� ����.
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


// �Ű�������

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