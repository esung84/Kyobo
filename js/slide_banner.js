$(function(){
    $("#slide_banner > ul:last").hide();
    let indexNum = 1;
    let a;

    function nextBanner(){
        let banner = $("#slide_banner > ul:visible");
        if(banner.index() == 1) a = 5;
        else if(banner.index() == 0) a =7;               
        $(banner).stop().animate({marginLeft:-1200},function(){
            $(banner).find("li:first").appendTo($(banner));            
            $(banner).css({marginLeft:0});           
        });
        indexNum++;        
        if(indexNum>=(a+1)) indexNum=1; /*인덱스 번호 */        
        $("#control_box").find("span").eq(0).text(indexNum);
    }
    
    function prevBanner(){
        indexNum--;     
        let banner = $("#slide_banner > ul:visible");

        if(banner.index() == 1) a = 5;
        else if(banner.index() == 0) a =7;
        if(indexNum<=0) indexNum=a; 

        $(banner).find("li:last").prependTo(banner);
        $(banner).css({marginLeft:-285});
        $(banner).stop().animate({marginLeft:0},);
        $("#control_box").find("span").eq(0).text(indexNum) ;        
    }
    
    $(".slide_banner li ").click(function(){
        let num = $(this).index();
        if(num==0){
            $("#control_box").find("span").eq(1).text("-7") ;
        }else{
            $("#control_box").find("span").eq(1).text("-5") ;
        }
        $(this).addClass("purple").siblings().removeClass("purple")
        $("#slide_banner ul").eq(num).show().siblings("ul").hide();
                              
    });

    let play = setInterval(nextBanner, 2000);

    $("#btnL_banner").click(function(){
        clearInterval(play);
        prevBanner();
    }); 
    $("#btnR_banner").click(function(){
        clearInterval(play);
        nextBanner();
    });
    $("#control_box button").click(function(){
        setInterval(nextBanner, 2000);
    });
});