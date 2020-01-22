function getToken() {
    return localStorage.getItem('token');
}

async function login(evnet) {
    evnet.preventDefault();     //submit의 기능 제거
    evnet.stopPropagation();    //상위로 이벤트가 전달되는것을 막는것

    const emailElement = document.querySelector('#email');
    const passwordElement = document.querySelector('#password');

    const email = emailElement.value;           //받아온 email,password string화
    const password = passwordElement.value;

    try{
        const res = await axios.post('https://api.marktube.tv/v1/me', {
            email,
            password,
        });
        const {token} = res.data;   //const token = res.data.token
        if (token === undefined){
            return ;
        }
        localStorage.setItem('token',token);
        location.assign('/');
    }catch(error) {
        const data = error.response.data;
        if (data){
            const state = data.error;
            if (state === 'USER_NOT_EXIST'){
                alert('사용자가 존재하지 않습니다.');
            } else if(state ==="PASSWORD_NOT_MATCH"){
                alert('비밀번호가 틀렸습니다.');
            }
        }
    }
}

function bindLogoutButton(){
    const form = document.querySelector('#form-login')
    form.addEventListener('submit', login);
}

function main(){
    //버튼에 이벤트 연결
    bindLogoutButton();


    //token 체크
    const token = getToken();
    if (token !== null) {
        location.assign('/');
        return;
    }
}
document.addEventListener('DOMContentLoaded', main);