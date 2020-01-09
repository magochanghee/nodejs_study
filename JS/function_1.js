function hello1() {
    console.log('hello1')
}

function hello2(name) {
    console.log('hello2',name)
}


console.log(hello1, typeof hello1)

hello2('changhee')

function hello3(name){
    return `hello3 ${name}`
}

console.log(hello3('changhee2'))



const hello4 = function() {
    console.log('hello4')
}
console.log(hello4, typeof hello4)



const hello5 = function(name){
    console.log('hello5',name);
}
hello5('case')


const hello6 = function(name){
    return `hello6 ${name}`
}

console.log(hello6('mark'))



// 선언적 function과 익명함수 차이

function hello7(){
    console.log('hello7')
}
hello7()

hello8()
// hello8 is not a function
var hello8 = function(){
    console.log('hello8')
}

hello9();
// not a defined
const hello9 = function(){
    console.log('hello9')
}
