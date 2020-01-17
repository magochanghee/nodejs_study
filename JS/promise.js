/*
ES6부터 javascript 의 표준 내장 객체로 추가
*/

console.log(Promise)

//생성자 인자로 excutor라는 함수 이용

/*
excutor 함수는 resolve와 reject라는 인자랄가진다
resolve(), reject()
*/
new Promise(/*excutor*/(resolve, reject)=>{});

// 생성자를 통해서  프로미스 객체를 만드는 순간 pending 상태
// execute 함수 인자중 하나의 resolve 함수를 실행하면 fulfilled(이행)상태가 된다.

new Promise((resolve,reject)=>{
    //          //pending 상태 돌입
    // ...
    resolve(); //fullfiled 상태 돌입
});

//reject함수를 실행하면 거부상태가 된다.

new Promise((resolve,reject)=>{
    reject(); //rejected 이행 거부상태
});


const p = new Promise((resolve,reject)=>{
    /*pending*/
    setTimeout(()=>{
        resolve();
    }, 1000);
});


p.then(()=>{
    console.log('1초후 시작') /*callback 부분*/
})

