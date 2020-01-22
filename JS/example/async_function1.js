/*
Promise 객체를 리턴하는 함수
 */

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        },ms);
    })
}
//Promise 객체를 이용해서 비동기 로직을 수행할때
p(1000).then(ms =>{
    console.log(`${ms}이후 비동기 완료`)
});

// Promise 객체를 리턴하는 함수를 await로 호출
/*
const ms = await p(1000);
console.log(`${ms}ms 이후 비동기 완료`)
*/
(async function main(){
    const ms =await p(1000);
    console.log(`${ms}이후 비동기 완료`)
})();

/**
 Promise 객체가 rejected 된 경우의 처리를 위해 Try catch를 사용
 */
function p_2(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('reason'));
        },ms);
    })
}

(async function main(){
    try {
        const ms = await p_2(1000);
    } catch (error){
        console.log(error);
    }
})();



/*
async function 에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴
*/

async function asyncP() {
    return 'mark'
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch (error){
        console.log(error);
    }
})();