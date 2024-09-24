const unitPrice = 38200; //초기값
const quantityInput = document.getElementById('quantity');
const totalSpan = document.getElementById('total');
const minusButton = document.getElementById('minusbtn');
const plusButton = document.getElementById('plusbtn');


function getQuantity() {
    const value = parseInt(quantityInput.value, 10);
    return isNaN(value) || value <= 0 ? 1 : value;
}

function updateTotal() {
    const quantity = getQuantity();
    const total = unitPrice * quantity;
    totalSpan.textContent = `${total.toLocaleString()}원`; ;
}

updateTotal();
//-버튼클릭시 수량감소,금액감소
minusButton.addEventListener('click', () => {
    let quantity = getQuantity();
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateTotal();
    }
});
//+버튼클릭시 수량증가,금액증가
plusButton.addEventListener('click', () => {
    let quantity = getQuantity();
    quantity++;
    quantityInput.value = quantity;
    updateTotal();
});


//배경이미지변경
document.querySelectorAll('#sit_bg_priview .bg_thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        const imgSrc = thumb.querySelector('img').src;
        document.getElementById('sit_item').style.backgroundImage = `url('${imgSrc}')`;
    });
});
var swiper = new Swiper(".review", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    Infinity: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});