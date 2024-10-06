$(function () {
    // 메인이미지 슬라이드 스와이퍼
    var swiperMainImg = new Swiper(".main_img", {
        spaceBetween: 80,
        autoplay: true,
        loop: true,
        speed: 2500,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                // 초기화 시 첫 슬라이드의 scale 애니메이션 적용
                applyScaleAnimation(this.slides[this.activeIndex].querySelector('.scale_bg'));
            },
            slideChangeTransitionEnd: function () {
                // 현재 활성 슬라이드의 scale 애니메이션 적용
                applyScaleAnimation(this.slides[this.activeIndex].querySelector('.scale_bg'));
            }
        }
    });

    function applyScaleAnimation(element) {
        if (element) {
            element.style.transition = 'none'; // 애니메이션 리셋
            element.style.transform = 'scale(1.04)'; // 초기 상태
            // 약간의 지연 후 애니메이션 적용
            setTimeout(function () {
                element.style.transition = 'transform 5s ease'; // 애니메이션 속성 재설정
                element.style.transform = 'scale(1.08)'; // 최종 상태
            }, 50);
        }
};
})

window.onload = function() {
    const modal = document.getElementById('modal');
    const modalBtn = document.getElementById('modalBtn');

    // 모달창 닫기 버튼 클릭 시 모달창 숨기기
    modalBtn.onclick = function() {
        modal.style.display = 'none';
    };
};