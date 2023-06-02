
$(function () {
    var i=0;

    /*슬라이드 메뉴 언더라인 및 색상 변경 왜!!!!!! under_dash 로 색상 적용이 안되냐!!*/
    $(".slide_menu li").click(function (e) {
        e.preventDefault();
        $(this).addClass("under_dash").css("color","#000");
        $(this).siblings().removeClass().css("color","gray");
    });
    
     function next(){
        i++;
        if (i > $('.slider1 > li:last').index()){
           i=0;
         }
        $('.slider1 li').eq(i).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
     }
     function prev(){
        $('.slider1 > li').eq(i).stop().fadeOut(); 
        i--;
        if (i < 0){
           i=$('.slider1 > li:last').index();
         }
        $('.slider1 > li').eq(i).stop().fadeIn(2000);               
     }

     var slide = setInterval(next,3000);       

    $("#btn_left").click(function(){        
        prev();
    });
    $("#btn_right").click(function(){        
        next();        
    });

    $("#recentBook").click(function(){        
        $('.slider1 li').eq(2).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    });
    $("#newBook").click(function(){        
        $('.slider1 li').eq(3).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    });
    $("#eventBook").click(function(){        
        $('.slider1 li').eq(4).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    });
    $("#elecBook").click(function(){        
        $('.slider1 li').eq(5).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    });
    $("#samBook ").click(function(){        
        $('.slider1 li').eq(6).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    });
    $("#hotBook ").click(function(){        
        $('.slider1 li').eq(7).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    }); 
    $("#talkBook ").click(function(){        
        $('.slider1 li').eq(8).stop().fadeIn(2000)
        .siblings("li").stop().fadeOut();
    });      
   

});
