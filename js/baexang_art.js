// 베스트 슬라이드 스와이퍼
var swiperBestImg = new Swiper(".best_img", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//신상품 슬라이드 스와이퍼
var swiperNewArt = new Swiper(".newart", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//리뷰 슬라이드 스와이퍼
var swiperReview = new Swiper(".review", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//이미지에 마우스 올리는 경우 하얀이미지

    let imgHovers = document.querySelectorAll('.best_imghover');

    imgHovers.forEach((imgHover) => {
        imgHover.addEventListener('mouseover', function () {
            imgHover.style.opacity = '1';
        });
        imgHover.addEventListener('mouseleave', function () {
            imgHover.style.opacity = '0';
        });
    });

//이미지안 하트아이콘 누를시 알림
function bestClick() {
    alert('회원만 사용할 수 있는 기능입니다.');
}

//스크롤버튼 누르는 경우 위로 천천히 슬라이드
$(document).ready(function () {
    if ($(window).scrollTop() == 0) {
        $(".iconbutton").hide();
    }

    $(document).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".iconbutton").show();
        } else {
            $(".iconbutton").hide();
        }
    });

    $(".iconbutton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000); //1초
    });
});

//서브페이지 제목 서서히 나타나게 애니메이션
$(function () {
    $('.title').delay(100).animate({
        opacity: 1,
        top: 240
    }, 400, function () {
        $('.title_text').delay(100).animate({
            opacity: 1,
            top: 360
        }, 300);
    });
});

//서브페이지 부제목 서서히 나타나게 애니메이션
$(function () {
    $('.choice').delay(300).animate({
        opacity: 1
    }, 300, function () {
        $('select').delay(300).animate({
            opacity: 1
        }, 300, function () {
            $('.cont01').delay(300).animate({
                opacity: 1
            }, 300);
        });
    });
});

