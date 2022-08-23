$(document).ready(function(){
    $(".menu").hover(function(){
        $(".dropdown-menu,.navbox").addClass("active");
        $(".navbar01").addClass("d-none")
        $(".navbar02").removeClass("d-none")
    },function(){
        $(".dropdown-menu,.navbox").removeClass("active")
        $(".navbar01").removeClass("d-none")
        $(".navbar02").addClass("d-none")
    })
  
    new Swiper('.swiper',{
        loop:true,
        navigation: {
            nextX1:".swiper-button-next",
            prevX1:".swiper-button-prev",
        }
    })

    setInterval(slideNum,3000)
    let num=0;

    function slideNum(){
        num++;
        if(num==4){
            num=1
            $(".swiper-wrapper").css("left",0)
        }
        $(".swiper-wrapper").stop().animate({left:num*-1900},500)
    }
})