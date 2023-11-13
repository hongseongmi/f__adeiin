$(document).ready(function () {
  // 배너스와이퍼 용
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOninteraction: false,
    },
  });

  // 1. offset top 값으로 헤더 버튼 클릭했을때 움직이게끔 처리해보기
  // 2. offset top값으로 섹션별 도착할때마다 헤더 텍스트들 컬러 변경

  $(window).scroll(function(){

    let sct = $(window).scrollTop();

    console.log(sct)
    const banner = $('.banner').offset().top;
    const sec1 = $('.sec-1').offset().top;
    const sec2 = $('.sec-2').offset().top;
    const sec3 = $('.sec-3').offset().top;
    const sec4 = $('.sec-4').offset().top;
    const footer = $('.footer').offset().top;

    $('.menu').each(function(index){
      $(this).attr('data-index',index);
    });

    $('.menu1').click(function(){
      $('html,body').stop().animate({
        scrollTop:sec3
      });
    });
    $('.menu2').click(function(){
      $('html,body').stop().animate({
        scrollTop:sec4
      });
    });

    if(sct >= sec1 && sct < sec3){
      $('.header-area .menu').addClass('active');
      $('.logo svg').addClass('active');
      // $('.hamburger span').addClass('on');
    }else if(sct >= sec4 && sct < footer){
      $('.header-area .menu').removeClass('active');
      $('.logo svg').removeClass('active');

    }else{
    }
    if(sct >= banner && sct < sec1){
      $('.header-area .menu').removeClass('active');
      $('.logo svg').removeClass('active');
    } else if(sct >= sec1 && sct < sec3){
      $('.header-area .menu').addClass('active');
      $('.logo svg').addClass('active');
    }else if(sct >= sec4 && sct < footer){
      $('.header-area .menu').removeClass('active');
      $('.logo svg').removeClass('active');
    }else{
    }


  });

    
  
  //sec-1 data-alt 연결하기
  $(".main-menu li").click(function () {
    // 클릭하는 li에 미리 액티브 걸려있던 거 지워주고 다시 추가해주기
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    const result = $(this).attr("data-alt");
    // data-alt 적어놓기만 했던 애들한테 data-alt 속성값 부여해줌

    $(".menu-box div").removeClass("active");
    //내용을 가진 부분임.
    //각각 지워주기엔 식이 너무 길어지니까 공통된 태그중 하나인 div로 묶어줌
    $(`#${result}`).addClass("active");
    //변수 result에 해당되는 애들한테 액티브 추가
  });

  // sec-1 메뉴버튼 클릭했을때 색상(active) 추가해주기
  $(".main-menu li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  // hamburger active 추가 해주기
  
  $('.hamburger').click(function(){
    let sct = $(window).scrollTop();


    $('.header-area .hamburger-bg').toggleClass('active');
    $('.hamburger span').toggleClass('active');
    $('.hamburger span').toggleClass('on');

    if(sct >= banner){
      $('.hamburger span').removeClass('on');

    }
  });
  $('.container').click(function(){
    $('.header-area .hamburger-bg').removeClass('active');
    $('.hamburger span').removeClass('active');
  });

  // sec-3 스와이퍼용
  var swiper = new Swiper(".sec-Swiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    autoplay: {
      loop: true,
      disableOnInteraction: false,
      delay: 3500,
    },
  });

  $(window).scroll(function () {
    const sct = $(window).scrollTop();
    console.log(sct);
  });

  // sec-4 동그라미 객체 스크롤에 맞게 굴리기
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    let image = document.getElementById("svg");
    image.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
  }

  // footer-bottom 모바일 탭메뉴 on클래스 추가해주기
  $('.btn').click(function(){
    $('.bottom').siblings().removeClass('on')
    $(this).parent().toggleClass('on')
  });
  // aos 구동시키는 함수
  AOS.init();

}); //end
