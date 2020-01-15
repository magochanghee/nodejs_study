// /* fulfilled 되거나 rejected 된 후에 최종적으로 실행할것 .finally()를 설정하고, 함수를 인자로 넣는다.
//  */

//  function p() {
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve('message')
//          },1000);
//      });
//  }

//  p().then(message =>{
//     console.log('1000ms 이후 fulfilled',message);
//  }).catch(error=>{
//     console.log('1000ms 이후 rejected',error);
//  }).finally(()=>{
//      console.log('finally');
//  })

//  /*
//  보통 비동기 작업을 할때, callback함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
//  이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.
//  */

// function c(callback) {
//     setTimeout(()=>{
//         callback();
//     },1000);
// }
// c(()=>{
//     console.log('1000ms 이후 callback')
//     c(()=>{
//         console.log('2000ms 이후 callback')
//     })
// })


/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기작업을 순차적으로 아래로 표현 가능
*/

function p_2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('help');
    },1000);
});
}


p_2()
.then(()=>{
    console.log('1초',)
    return p_2();
})
.then(()=>{
    console.log('2초')
    return p_2();
})
.then((message)=>{
    console.log('3초',message)
    return p_2();
})
.then(()=>{
   console.log('4000ms 이후 call',) 
});