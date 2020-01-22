function getToken() {
    return localStorage.getItem('token');
}

async function getUserByToken(token){
    try {
        const res = await axios.get('https://api.marktube.tv/v1/me',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return res.data;
    } catch (error){
        console.log('getUserByToekn',error);
        return null;
    }
}

function save(){
    event.preventDefault();
    event.stopPropagation();
    console.log('save')
}

function bindSaveButton(){
    const form = document.querySelector('#form-add-book');
    form.addEventListener('submit',save);
}

async function main(){
    //버튼에 이벤트 연결
    bindSaveButton();
    //토큰 체크
    const token = getToken();
    if (token === null){
        location.assign('/login');
        return;
    }
    //토큰으로 서버에서 나의 정보 확인
    const user = await getUserByToken(token);
    if (user ===null){
        localStorage.clear();
        location.assign('/login');
        return;
    }
}


document.addEventListener('DOMContentLoaded',main);