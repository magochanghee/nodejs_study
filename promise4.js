/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
value가 프로미스 객체면, resolve된 then 메서드를 실행합니다.
value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메소드를 실행합니다.
*/


Promise.resolve(/* value */);


Promise.resolve(new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve('foo');
    }, 1000);
})).then((data)=>{
    console.log('프로미스객체인 경우, resolve된 결과를 받아서 then이 실행된다.', data);
})

Promise.resolve('bar').then(data =>{
    console.log('프로미스 객체가 아닌경우, then메소드가 없는 경우, fulfilled됩니다.',data)
})


/*
Promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경됩니다.
*/

Promise.reject(/*value */);

Promise.reject(new Error('reason'))
    .then(error=>{})
    .catch(error=>{
        console.log(error)
    });

/*
 프로미스 객체를 여러개 생성하여,
 배열로 만들어 인자로 넣고 Promise.all을 실행하면,
 배열의 모든 프로미스 객체들이 fulfilled되었을때, then의 함수가 실행됩니다.
 then의 함수 인자로 프로미스 객체들의 resolve인자값을 배열로 돌려준다.
 */

 // Promise.all([프로미스 객체들]);

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(ms,'초 이후')
            resolve();
        },ms);
     })
 }


Promise.all([p(1000),p(2000),p(3000)]).then((messages)=>{
    console.log('모두 fulfilled된 이후에 실행됩니다.',messages)
})

/*
프로미스 객체를 여러개 생성하여,
배열로 만들어 인자로 넣고 Promise.race를 실행하면
배열의 모든 프로미스 객체들 중 가정 먼저 fulfilled된 것으로, then의 함수가 실행됩니다.
then의 함수의 인자로 가장 먼저 fulfilled된 프로미스 객체의 resolve인자값을 돌려줍니다.
*/

Promise.race([p(1000),p(2000),p(3000)]).then(message=>{
    console.log('가장 먼저 끝난 fulfiled된 이후에 실행된다.',message);
});

