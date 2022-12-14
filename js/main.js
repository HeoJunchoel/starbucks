
// BADGE
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100 
    });
  }
  // _.throttle(함수, 시간)
}, 300));
// 상단이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1 ) * .7 // 0.7, 1.4, 2.1, 2.7
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical', //수직방향
  autoplay: true, // 자동플레이 여부
  loop:true //반복 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
    
    },
    pagination: {
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어여부
    },
    navigation:{
      prevEl:'.promotion .swiper-prev',
      nextEl:'.promotion .swiper-next'
  }
});

// AWARDS
new Swiper('.awards .swiper-container',{
  // direction: 'horizontal' 기본값
  autoplay : true,
  loop: true,
  spaceBetween: 30,
  slidesPerView : 5, //한번에 몇개를 눈에 보여줄거냐
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion // 느낌표는 값의 반대값을해라
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else {
    promotionEl.classList.remove('hide');
    // 보임 처리
  }
});

const arrow_upward = document.querySelector('.toggle-promotion .material-symbols-outlined');
let meterialE = false;
arrow_upward.addEventListener('click', function(){
  meterialE = !meterialE;
  if(meterialE){
    arrow_upward.classList.add('ckd');
  } else {
    arrow_upward.classList.remove('ckd');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// function floatingObject(selector, delay, size){
//   // gsap.to(요소, 시간, 옵션)
//   gsap.to(selector, 1, {
//     y: 0, // y축으로 이동
//     repeat:-1, // 무한반복
//     yoyo:true,  // 원위치로 복귀
//     ease: Power1.easeInOut, // 매끄러운 애니메이션 이징함수greensock.com
//     delay: 1 // 1초뒤에 시작함
//   });
// }
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, // 선택자
     random(1.5, 2.5), // 애니메이션 동작 시간
    {// 옵션
      y: size, // y축으로 이동
      repeat:-1, // 무한반복
      yoyo:true,  // 원위치로 복귀
      ease: Power1.easeInOut, // 매끄러운 애니메이션 이징함수greensock.com
      delay: random(0, delay) // 1초뒤에 시작함
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

