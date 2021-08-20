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