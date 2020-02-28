'use strict'

'javascript object'

const obj = {
    title: 'nodejs 올인원 패키지'
}

// function isEmptyObj() {
//     if (obj.title) {
//         return true;
//     }else {
//         return false
//     }
// }

const isEmptyObj = () => obj.title ? true : false

isEmptyObj();