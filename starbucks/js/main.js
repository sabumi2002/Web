// console.log('JS');   js가 정상적으로 작동하는지 확인
// 자바스크립트에서 document는 html을 뜻함
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused'); // classList객체에 'focused'추가
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused'); // classList객체에 'focused'추가
    searchInputEl.setAttribute('placeholder', '');
});

// querySelector- 특정한 요소를 찾음
const badgeEl= document.querySelector('header .badges');
// _. throttle(함수, 시간)- 부하가 걸리지않게 0.3초의 간격으로 제어한다
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);   애니메이션 처리해주는 라이브러리에서 제공하는 기능
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1, 
            display: 'block'
        });
    }
}, 300));

// querySelectAll- '' 안에있는 데이터요소를 다 가져온다.
const fadeEls= document.querySelectorAll('.visual .fade-in');
// html에서 찾은 fadeEls의 요소들 개수만큼 forEach메소드에 인수로 적은 함수가 실행이된다.
fadeEls.forEach(function (fadeEl, index) {  // function(요소, 반복된 횟수)
    // gsap.to(요소, 지속시간, 옵션);   애니메이션 처리해주는 라이브러리에서 제공하는 기능, 지속시간은 초단위
    gsap.to(fadeEl, 1, {
        delay: (index+ 1)* .7, // 0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    // spaceBetween: 1000,
    slidesPerView: 1, 
    speed: 300, 
    allowTouchMove: false, // 터치 이동  x

    direction: 'vertical', 
    autoplay: true, 

});