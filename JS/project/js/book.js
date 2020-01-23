async function logout() {
    const token = getToken();
    if (token === null) {
      location.assign('/login');
      return;
    }
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log('logout error', error);
    } finally {
      localStorage.clear();
      location.assign('/login');
    }
  }

function bindLogoutButton(){
    const btnLogout =document.querySelector('#btn_logout');
    btnLogout.addEventListener('click',logout);
}
function getToken() {
    return localStorage.getItem('token');
}

async function getUserByToken(token){
    try {
        const res = await axios.get('https://api.marktube.tv/v1/me',{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    }catch(error){
        console.log('getUserByToken :', error);
    }
}

async function getBook(bookId){
    const token = getToken();
    if(token ===null){
        location.assign('/login');
        return null;
    }
    try{
        const res = await axios.get(`https://api.marktube.tv/v1/book/${bookId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error){
        console.log('getbook error', error);
        return null;
    }
}

async function deleteBook(bookId){
    const token = getToken();
    if (token === null){
        location = '/login';
        return;    
    }
    await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`,{
        headers:{
            Authorization:`Bearer: ${token}`,
        }
    });
}

function render(book){
    const detailElement = document.querySelector('#detail');
    detailElement.innerHTML = `<div class="card bg-light w-100">
    <div class='card-header'><h4>${book.title}</h4></div>
    <div class='card-body'>
        <h5 class='card-title'>${book.message}</h5></div>
        <p class='card-text'>글쓴이 : ${book.author}</p>
        <p class='card-text'>링크 : <a href="${
            book.url
        }" target="_BLANK">바로가기</a></p>
        <a href='/edit?id=${book.bookId}' class="btn btn-primary btn-sm">Edit</a>
        <button type="button" class="btn btn-danger btn-sm" id="btn-delete">Delete</button>
    </div>
    <div class="card-footer">
        <small class="text-muted">작성일 : ${new Date(book.createAt,).toLocaleString()}</small>
        </div>
    </div>`;

    document.querySelector('#btn-delete').addEventListener('click', async ()=>{
        try{
            await deleteBook(book.bookId);
            location.assign('/');
        }catch (error){
            console.log('error',error);
        }
    });
}

async function main(){
    //버튼에 이벤트 연결
    bindLogoutButton();
    //브라우저에서 id 가져오기
    const bookId = new URL(location.href).searchParams.get('id')

    //토큰 체크
    const token = getToken();
    if (token === null){
        location.assign('/login');
        return;
    }
    //토큰으로 서버에서 내정보 가져오기
    const user = await getUserByToken(token);
    if (user === null){
        localStorage.clear();
        location.assign('/login');
        return;
    }
    //책을 서버에서 받아오기
    const book = await getBook(bookId);
    if(bookId === null){
        alert('책 가져오기 실패');
        return;
    }
    console.log(book)
    //받아온 책을 그리기
    render(book);
}

document.addEventListener('DOMContentLoaded',main);