function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
            // reject(new Error('reason'))
        }, ms);
    })
}

async function asyncP() {
    const ms = await p(1000);
    return 'Mark: '+ms;
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch (error){
        console.log(error);
    } finally {
        console.log('end');
    }
})();


p(1000)
.then(()=>p(1000))
.then(()=>p(1000))
.then(()=>{
    console.log('3000ms이후 실행');
});
// 위 아래 같음
(async function main(){
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 이후 콜')
})();

//promise.all 
(async function main(){
    const results = await Promise.all([p(1000),p(2000),p(3000)]);
    console.log(results);
})();

//promise.race

(async function main(){
    const results = await Promise.race([p(1000),p(2000),p(3000)]);
    console.log(results);
})();