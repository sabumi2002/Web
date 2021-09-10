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
const badgeEl = document.querySelector('header .badges');
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
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

// querySelectAll- '' 안에있는 데이터요소를 다 가져온다.
const fadeEls = document.querySelectorAll('.visual .fade-in');
// html에서 찾은 fadeEls의 요소들 개수만큼 forEach메소드에 인수로 적은 함수가 실행이된다.
fadeEls.forEach(function (fadeEl, index) { // function(요소, 반복된 횟수)
  // gsap.to(요소, 지속시간, 옵션);   애니메이션 처리해주는 라이브러리에서 제공하는 기능, 지속시간은 초단위
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
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
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

//스타벅스 프로모션
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 실행한거 반대로 다시 실행
    ease: Power1.easeInOut, // gsap easing- 느려졌다 빨라졌다 느려졌다 자연스럽게 만들어줌
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
