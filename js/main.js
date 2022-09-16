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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' 
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간) 1000ms=1s / 300ms=0.3s

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, { //window - window 창
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 0.7 1.4 2.1 2.8
    opacity: 1
  })
});


//new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데부터 시작 
  loop: true,
  autoplay: {
    delay: 5000 //1000ms = 1s
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // false = !false(true)
  if (isHidePromotion) { //isHidePromotion이 true이면 밑에줄 실행, false이면 else다음 부분 실행
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide')
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
             // = selector, delay, size
function floatingObject(selector, delay, size){ 
//밑의 옵션에서 사용할 매개변수들 - 선택자, 지연시간, 애니메이션 이동범위
  gsap.to(selector, random(1.5, 2.5), { //애니메이션 시간 1.5초~2.5초 랜덤
  // gsap.to(요소, 애니메이션 시간, 옵션);
    y: size, //floating1,2 = 15 / floating3 = 20
    repeat: -1, //무힌빈복
    yoyo: true, //왔다갔다
    ease: Power1.easeInOut, //gsap easing라이브러리 코드 참조
    delay: random(0, delay) //페이지 로딩 후 지연시간 0초~'delay'초 뒤 실행
  });
}


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic //js 라이브러리 명령어
    .Scene({ //요소의 보여짐 여부를 감시하는 메쏘드
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 /*뷰포트의 0.8지점(0부터 1)에 hook(갈고리)을 설정,
       요소가 뷰포트의 0.8지점을 지나면 요소가 화면에 보여진다고 판단되어 
       setClassToggle이라는 메쏘드가 실행되는 구조*/
    }) 
    .setClassToggle(spyEl, 'show') //class를 넣었다 뺐다 제어해주는 메쏘드
    .addTo(new ScrollMagic.Controller()); /*controller 옵션을 추가하기 위한 메쏘드
    위의 옵션들을 controller(스크롤바)에 할당하여 동작하도록 함.*/
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//this-year class를 가진 요소의 글자내용에 년도가 삽입 됨.