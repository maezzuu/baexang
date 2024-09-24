$(document).ready(function () {
    $("#header").load("include/header.html");
    $("#footer").load("include/footer.html");
});

//서브페이지8번 자동로그인 여부
function loginauto() {
    confirm('자동로그인을 사용하시면 다음부터 회원아이디와 비밀번호를 입력하실 필요가 없습니다.\n\n공공장소에서는 개인정보가 유출될 수 있으니 사용을 자제하여 주십시오.\n\n자동로그인을 사용하시겠습니까?');
}

//서브페이지8번 아이디,비밀번호 입력창
let userId = document.querySelector("#userId");
let loginPwd = document.querySelector('#userPwd');

userId.addEventListener('change', function() {
    console.log('test');
});

userId.addEventListener('focus', function () {
    userId.style.backgroundColor = '';
    userId.style.border = '';
    userId.style.transition = 'all 0.3s';
});

loginPwd.addEventListener('change', function () {
    loginPwd.style.backgroundColor = 'white';
    loginPwd.style.border = '1px solid #C9AB81';
    loginPwd.style.transition = 'all 0.3s';
});

loginPwd.addEventListener('focus', function () {
    loginPwd.style.backgroundColor = '';
    loginPwd.style.border = '';
    loginPwd.style.transition = 'all 0.3s';
});

let user01 = document.querySelector('.userLogin01');
let user02 = document.querySelector('.userLogin02');
let userBtn = document.querySelector('.login_btn > a');
let userSave = document.querySelector('.login_auto > span');

user01.addEventListener('click', function () {
    userId.setAttribute('placeholder', '아이디');
    user01.classList.add('user_on');
    userBtn.textContent = 'LOGIN';
    userSave.textContent = '아이디 저장';
    document.querySelector('.login_auto > input').style.display = '';
});

user01.addEventListener('mouseleave', function () {
    user01.classList.remove('user_on');
});

user02.addEventListener('click', function (event) {
    event.preventDefault();
    userId.setAttribute('placeholder', '주문번호');
    user02.classList.add('user_on');
    userBtn.textContent = '주문조회하기';
    userSave.textContent = '주문번호 분실 시 고객센터(02-123-4567)로 별도 문의 해주세요.';
    document.querySelector('.login_auto > input').style.display = 'none';
});

user02.addEventListener('mouseleave', function () {
    user02.classList.remove('user_on');
});

