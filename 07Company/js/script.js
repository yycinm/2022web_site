$(".navbar_r>div").click(function(){
    $(".navbar_r>div").removeClass("active")
    $(this).addClass("active")
})

$(".navbar_l>ul>li").hover(function(){
    $(this).addClass("on");
},
function(){
    $(this).removeClass("on")
})

$(".toggle").click(function(){
    $(".navbarClone").css("left",0)
    $(".overlay").show()
    $(".overlay").click(function(){
        $(".navbarClone").css("left","-100%")
        $(".overlay").hide()
    })
    
})

$(".navbar_l>ul").clone().appendTo(".mMenu")

$(".mMenu>ul>li>a").click(function(){
  
    $(".mMenu li>a").parent().find(".submenu").hide()

    if($(this).hasClass(".view")){
        $(".mMenu li>a").removeClass("view");

    }else{
        $(this).parent().find(".submenu").fadeIn();
        $(".mMenu li>a").removeClass("view");
        $(this).addClass("view");
        

    }

    
    
})

$(".x-btn").click(function(){
    $(".navbarClone").hide()
    $(".overlay").hide();
   

    $(".toggle").click(function(){
        $(".navbarClone").show()
    $(".overlay").show();
    })
})

$(".navbar_m>div").click(function(){
    $(".navbar_m>div").removeClass("active")
    $(this).addClass("active")
})

// $(".mMenu>ul>li>a").append("<i class='fa-solid fa-chevron-down'></i>")




function nowMenu(menu){
    console.log(menu)

    
}