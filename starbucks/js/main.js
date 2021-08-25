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
        // gsap.to(요소, 지속시간, 옵션);
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
