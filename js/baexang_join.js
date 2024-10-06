//sub09_02 아이디 공란 입력창/중복확인버튼클릭시
let inputId = document.querySelector('#userInputId')
let inputIdBtn = document.querySelector('.join_btn > a')

inputIdBtn.addEventListener('click',function(){
    let inputIdtext = inputId.value
    console.log(inputIdtext)

    if (inputIdtext == ''){
        alert('아이디를 입력해주세요')
    } else if (inputIdtext) {
        confirm('가입할 수 있는 아이디입니다.\n현재 아이디를 사용하시겠습니까?')
    }
})
