
$(function(){

    /*풀페이지*/
    $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally:true,
      anchors:['first','second','third','fourth','fifth','sixth'],
      navigation:true,
      navigationPosition:'left',
      navigationTooltips:['Oak Valley','Special Offer','Room','Activity','Comunity',''],
      showActiveTooltip:true,

    'onLeave' : function(anchorLink, index){
      if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6){
          $('header').addClass('sticky');
          $('.content_list').addClass('active');
          $('.go_top').addClass('active');
          $('.fp-tooltip').addClass('sticky');
          $('#fp-nav ul li a span').addClass('sticky');
          $('.scroll-down').addClass('active');
        }
      else{
          $('.go_top').removeClass('active');
          $('header').removeClass('sticky');
          $('.fp-tooltip').removeClass('sticky');
          $('#fp-nav ul li a span').removeClass('sticky');
          $('.scroll-down').removeClass('active');
          }
      },

    'afterLoad' : function(anchorLink, index){
      if(index == 3){
          $('.box01').addClass('active');
          $('.swiper-button-prev').addClass('active');
          $('.swiper-button-next').addClass('active');
          $('.scroll-down').show(500);
        }
      else if(index == 4){
          $('.img_box').addClass('active');
          $('.fa-play').addClass('active');
          $('.fa-pause').addClass('active');
          $('.scroll-down').show(500);
        }
      else if(index == 5){
          $('.tab_menu').addClass('active');
          $('.event_box').addClass('active');
          $('.scroll-down').show(500);
        }
      else if(index == 1 || index == 2){
          $('.scroll-down').show(500);
        }
      else if(index == 6){
          $('.scroll-down').hide(1000);
        }     
      }
    });

    /*고정헤더*/
    var firstmenu = $('nav > ul > li');
    var header = $('header');

    firstmenu.mouseover(function(){
        header.stop().animate({height:'320px'},300);
    })
              .mouseout(function(){
        header.stop().animate({height:'50px'},300)
    })

    /*첫번째 섹션 - 스와이퍼1*/
    var swiper1 = new Swiper(".main_swiper", {

        /*autoplay:{
          delay: 2500,
          disableOnInteraction: false,
        },*/
        
        loop: true,

        effect : 'fade',
        fadeEffect:{
          crossFade: true
        },
        
        speed: 1200,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
    /*두번째 섹션*/


        $('.z1').mouseover(function(){
          $(this).stop().fadeOut()
          $('.a1').stop().fadeIn()
        }).mouseout(function(){
          $(this).stop().fadeIn()
          $('.a1').stop().fadeOut()
        })
    
        $('.z2').mouseover(function(){
          $(this).stop().fadeOut()
          $('.a2').stop().fadeIn()
        }).mouseout(function(){
          $(this).stop().fadeIn()
          $('.a2').stop().fadeOut()
        })
    
        $('.z3').mouseover(function(){
          $(this).stop().fadeOut()
          $('.a3').stop().fadeIn()
        }).mouseout(function(){
          $(this).stop().fadeIn()
          $('.a3').stop().fadeOut()
        })
    
        $('.z4').mouseover(function(){
          $(this).stop().fadeOut()
          $('.a4').stop().fadeIn()
        }).mouseout(function(){
          $(this).stop().fadeIn()
          $('.a4').stop().fadeOut()
        })

    

 

    /*세번째 섹션 - 스와이퍼2*/
    var swiper2 = new Swiper(".mySwiper2", {
            
        spaceBetween: 30,
        centeredSlides: true,
            
        slidesPerView:'auto',
        loop:true,

        effect : 'fade',
        fadeEffect: {
          crossFade: true
        },
            
        speed: 1500,

          /*autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },*/
            
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
            
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    /*네번째 섹션 - 스와이퍼3*/
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        600:{
          slidesPerView:2,
          spaceBetween:20
        },
        1024:{
          slidesPerView:3,
          spaceBetween:20
        },
        1440:{
          slidesPerView:4,
          spaceBetween:20
        }
      }
    });

    /*다섯번째 섹션*/
    var swiper = new Swiper(".noticeSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,

      breakpoints:{
        600:{
          slidesPerView:2,
          spaceBetween:100
        },
        1024:{
          slidesPerView:3,
          spaceBetween:150
        },
      },

      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });



    /*풀페이지 네비 - 아코디언*/
    $(window).resize(function(){ 
      if(window.innerWidth < 769){  // 현재 띄워진 창 크기가 768px이하일때
        
        $('.list_header').unbind(); //resize 할때마다 누적되므로 unbind 초기화 후
        
        $('.list_header').on('click',function(){ //클릭할때 슬라이드 실행
          if($(this).hasClass('anime')){
              slideUp2();
          }else{
              slideUp2();
              $(this).addClass('anime').next().slideDown();
          }
        })
      } 
      
      else {/* 768px 이상일때의 스크립트 - 원래상태로 되돌림 */ 

        $('.list_header').removeClass('anime'); //anime 클래스 제거
        $('.list_header').unbind('click'); //클릭해제
        $('.list_header').next().removeAttr('style'); //display style 제거
   
      }
    }).resize();

    function slideUp2(){
      $('.list_header').removeClass('anime').next().slideUp();
    }


    /*사이드 네비- 버튼*/
    $('.button').click(function(ev){
        ev.preventDefault();
        $(this).toggleClass('active');
        $('.fullnav').toggleClass('visible');
        $('#fp-nav').toggleClass('hide');
        $('header.sticky .button span').toggleClass('active');
        
        $('html, body').on('scroll touchmove mousewheel', function(e){
          if($('.fullnav').hasClass('visible')){
              e.preventDefault();
              e.stopPropagation();
              return false;
          };
        });
      });

    /*SNS 버튼*/
    $('.sns_plus').click(function(){
        $(this).toggleClass('active');
        $('.sns_icon').slideToggle().toggleClass('active');
      });
    
})

  



