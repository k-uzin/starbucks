const searchEl = document.querySelector('.search');
//searchEl이라는 변수에 html문서에서 search라는 class를 가진 요소를 찾아 저장.
const searchInputEl = searchEl.querySelector('input');
/*searchInputEl이라는 변수에 searchEl(search라는 class를 가진 요소)에서 
  input태그를 찾아 저장.
*/
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
  /*searchEl이라는 변수에 속한 요소를 click하면 searchInputEl에 속한
    요소가 focus 됨.
  */
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); 
  //search라는 class를 가진 요소에 focused라는 class를 추가해주겠다.
  //css에서 속성을 부여할 수 있음
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused'); 
  //search라는 class를 가진 요소에서 focused라는 class를 삭제하겠다.
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//this-year class를 가진 요소의 글자내용에 년도가 삽입 됨.