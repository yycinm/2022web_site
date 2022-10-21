$("#fullpage").fullpage({
    // menu:".navTop",
    // anchors:["m1st","m2st","m3st","m4st"],
    // navigation:true,
    // navigationPosition:"fp-right",
    // navigationTooltips:["first","second","third","forth"],
    // responsiveWidth:900
})


$(document).ready(function(){
  $(".vView .ch_txt>div").removeClass("active")
  $(".vView .ch_txt>div:first").addClass("active")
  $(".vView .chanels>div").click(function(){
    console.log($(this).index());
    let i = $(this).index();
    $(".vView .chanels>div").removeClass("active")
    $(".vView .chanels>div").eq(i).addClass("active")
    $(".vView .ch_txt>div").removeClass("active")
    $(".vView .ch_txt>div").eq(i).addClass("active")
    

    
   
    if(i == 0){
        $("#myVideo source").attr("src","movie/tubavideo01.mp4");
        $("#myVideo").get(0).load();
        $("#myVideo").get(0).play();

    }
    if(i == 1){
        $("#myVideo source").attr("src","movie/tubavideo02.mp4");
        $("#myVideo").get(0).load();
        $("#myVideo").get(0).play();
    }
    if(i == 2){
        $("#myVideo source").attr("src","movie/tubavideo03.mp4");
        $("#myVideo").get(0).load();
        $("#myVideo").get(0).play();
    }
    if(i == 3){
        $("#myVideo source").attr("src","movie/tubavideo04.mp4");
        $("#myVideo").get(0).load();
        $("#myVideo").get(0).play();
    }
    if(i == 4){
        $("#myVideo source").attr("src","movie/tubavideo05.mp4");
        $("#myVideo").get(0).load();
        $("#myVideo").get(0).play();
    }
    if(i == 5){
        $("#myVideo source").attr("src","movie/tubavideo06.mp4");
        $("#myVideo").get(0).load();
        $("#myVideo").get(0).play();
    }
  })
  $(".lang div").click(function(){

    $(".lang div").removeClass("active")
    $(this).addClass("active")
  })
  $('.slick-d').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,

    prevArrow: $('.slick-prev01'),
    nextArrow: $('.slick-next01'),
    // responsive: [
    //   { breakpoint: 990, // 화면의 넓이가 600px 이상일 때
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //   }},
    //   { breakpoint: 760, // 화면의 넓이가 320px 이상일 때
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  

    
  });
  $(".slideImg>div>div:nth-child(1)").css({"display":"block"});
  $(".slick-list00:nth-child(3)").hover(function() {
    $(".slideImg>div>div").css({"display":"none"});
    $(".slideImg>div>div:nth-child(1)").css({"display":"block"});
  }, function(){
    $(".slideImg>div>div:nth-child(1)").css({"display":"block"});

  });
  $(".slick-list00:nth-child(4)").hover(function() {
    $(".slideImg>div>div").css({"display":"none"});
    $(".slideImg>div>div:nth-child(2)").css({"display":"block"});
  }, function(){
    $(".slideImg>div>div:nth-child(2)").css({"display":"block"});

  });
  $(".slick-list00:nth-child(5)").hover(function() {
    $(".slideImg>div>div").css({"display":"none"});
    $(".slideImg>div>div:nth-child(3)").css({"display":"block"});
  }, function(){
    $(".slideImg>div>div>img:nth-child(3)").css({"display":"block"});
  });
  $(".slick-list00:nth-child(6)").hover(function() {
    $(".slideImg>div>div").css({"display":"none"});
    $(".slideImg>div>div:nth-child(4)").css({"display":"block"});
  }, function(){
    $(".slideImg>div>div:nth-child(4)").css({"display":"block"});

  });
  $(".slick-list00:nth-child(7)").hover(function() {
    $(".slideImg>div>div").css({"display":"none"});
    $(".slideImg>div>div:nth-child(5)").css({"display":"block"});
  }, function(){
    $(".slideImg>div>div:nth-child(5)").css({"display":"block"});

  });
  $(".slick-list00:nth-child(8)").hover(function() {
    $(".slideImg>div>div").css({"display":"none"});
    $(".slideImg>div>div:nth-child(6)").css({"display":"block"});
  }, function(){
    $(".slideImg>div>div:nth-child(6)").css({"display":"block"});

  });

  $('.mb_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  let current=0;
  $(".prev03").click(function(){
    current ++;
    // console.log(current)
    if(current > 1){
      current = 1
    }
    $(".newsWrap").stop().animate({left:820+current*410},500)

    console.log(current)
  })
  $(".next03").click(function(){
    current --;
    if(current < -1){
      current = -2
    }
    $(".newsWrap").stop().animate({left:820+current*410},500)
    console.log(current)
  })
  

  $('.topBtn').click(function () {
    //$.fn.fullpage.setScrollingSpeed(0); 효과를 없애고싶을때
    $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
    //$.fn.fullpage.setScrollingSpeed(700); 효과를 없애고싶을때
  });
});
