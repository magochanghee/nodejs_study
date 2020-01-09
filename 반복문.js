do{
    console.log('안녕하시오')
}while(Math.random() * 100 <= 90);


// for of
for (const i of [1,2,3,4]){
    console.log(i);
}


// for in 
Object.prototype.test = function() {};

for (const i in {a:1, b:2, c:3}){
    console.log(i)
}