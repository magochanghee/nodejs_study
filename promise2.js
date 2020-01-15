const p = new Promise((resolve,reject)=> {
    /*pending*/
    setTimeout(()=>{
        resolve();
    }, 1000);
});

p.then(()=>{
    console.log('1ms초후 시작'); /*callback 부분*/
})


/*then을 설정하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 사작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수(p)를 만들어 함수(p)실행과 동시에 then 을 설정합니다.
*/
function promise_2(){
    return new Promise((resolve,reject)=>{
        /*pending*/
        setTimeout(()=>{
            resolve();
        }, 1000);
    });
}

promise_2().then(()=>{
    console.log('1000ms초 이후에 실행')
})


/*
마찬가지로 프로미스객체가 rejected 되는 시점에 p.catch안에 설정한 callback함수가 실행된다.
*/

function promise_3(){
    return new Promise((resolve,reject)=>{
        /*pending*/
        setTimeout(()=>{
            reject();
        }, 1000);
    });
}
promise_3().then(()=>{
    console.log('1000ms초 이후에 실행2');
}).catch(()=>{
    console.log('1000ms초 이후에 rejected');
});

/*
excutor의 resolve 함수를 실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자를 받을 수 있다.
resolve('hello'); then((message)=>{...})*/

function promise_4(){
    return new Promise((resolve,reject)=>{
        /*pending*/
        setTimeout(()=>{
            resolve('hello');
        }, 1000);
    });
}
promise_4().then((message)=>{
    console.log('1000ms초 이후에 실행2',message);
}).catch(()=>{
    console.log('1000ms초 이후에 rejected');
});

/* reject도 동일하게 사용 가능 */
function promise_5(){
    return new Promise((resolve,reject)=>{
        /*pending*/
        setTimeout(()=>{
            reject(new Error('errorcode'));
        }, 1000);
    });
}
promise_5().then((message)=>{
    console.log('1000ms초 이후에 실행3',message);
}).catch((error)=>{
    console.log('1000ms초 이후에 rejected2',error);
});

/*
보통은 reject함수를 실행하여 rejected 되는 이유를 넘기는데,
표준내장객체인 Error의 생성자를 이용하여 Error객체를 만들수도 있다.*/

/* p라는 프로미스 객체가 fulfiled되는 시점의 p.then안에 callback함수가 실행된다. */

const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },1000);
});

p.then(()=>{
    console.log('1000ms이후 fullfiled됩니다.')
});


/* 
then을 설정하는 시점을 정확히 하고
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 사작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수(p)를 만들어 함수(p) 실행과 동시에 then을 설정합니다. */

function p_2(){
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    });
}

p_2().then(()=>{
    console.log('1000ms 이후 fullfiled callback')
})

function p_3(){
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject();
        },1000);
    });
}

p_3().then(()=>{
    console.log('1000ms 이후 fullfiled callback2')
}).catch(()=>{
    console.log('1000ms 이후 rejected')
});

/*
executor의 resolve 함수를 실행할때 인자를 넣어 실행하면, then의 callback함수의 인자로 받을수있다. 
*/

function p_4(){
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('message compact');
        },1000);
    });
}

p_4().then((message)=>{
    console.log('1000ms 이후 fullfiled callback2',message)
}).catch(()=>{
    console.log('1000ms 이후 rejected')
});

/* 마찬가지로 reject함수를 실행할때도 가능 */

function p_5(){
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('호ㅓ로롧');
        },1000);
    });
}

p_5().then(()=>{
    console.log('1000ms 이후 fullfiled callback2')
}).catch((reason)=>{
    console.log('1000ms 이후 rejected',reason)
});
