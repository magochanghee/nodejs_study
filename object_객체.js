// ��ü object
// �Լ�, Ŭ����(Ʋ) =? ��ü, ��ü, object

// function Ʋ() {} => new Ʋ()

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


// ��ü �Ӽ� �߰��ϱ� property
// {����� ������, �Լ�}
//���ֱ�
function D(name){
    this.name = 'Mark'
}

const d = new D();
console.log(d)

//�Լ��ֱ�

function F(){
    this.hello = function(){
        console.log('hello')
    };
}

new F().hello();

//
