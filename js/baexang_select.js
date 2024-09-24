//서브페이지 1번,3번 select 창 열고닫기
const select = document.querySelector('.select');
const selectedItem = document.querySelector('#selectedItem');
const selectedItem1 = document.querySelector('#selectedItem1');
const selectedItem2 = document.querySelector('#selectedItem2');
const options = document.querySelectorAll('.option');
const selectedValue = document.querySelector('.selected-value');

selectedItem.addEventListener('click', function () {
    select.classList.toggle('open');
});

//select닫기
options.forEach(option => {
    option.addEventListener('click', function () {
        selectedValue.textContent = this.textContent;
        select.classList.remove('open');
    });
});

//select부분 밖 클릭시 셀렉트 닫힘
document.addEventListener('click', function (event) {
    if (!select.contains(event.target)) {
        select.classList.remove('open');
    }
});

//서브페이지5번 아코디언메뉴
$(function () {
    const $snb = $('.artist_list ul').prev('a');
    const $snbNav = $('.artist_list li');

    $snb.addClass('dep');
    $snbNav.each(function () {
        if ($(this).hasClass('on')) {
            $(this).children('ul').show();
        }
    });

    $snb.on('click', function () {
        $(this).parent().addClass('on').children('ul').stop().slideDown(500);
        $(this).parent().siblings().removeClass('on').children('ul').stop().slideUp(500);
        return false;
    });
});
