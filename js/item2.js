$(function(){
    $.ajax({
        url:"./json/item2.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                    let hit_item = $(".item_box2 > li").eq(i);
                    hit_item.find("img").attr("src", data[i].src);                    
                    hit_item.find("div").append($("<p>").text(data[i].title))                    
                }
            }
        }
    }); 
    $(".item_box2 > li").on({
        mouseover :function(){
            $(this).find("div").show();
        },
        mouseout:function(){
            $(this).find("div").hide();
        }
    });
    function nextItem2() {
        $(".item_box2").stop().animate({marginLeft:-285},function(){
            $('.item_box2 > li:first').appendTo('.item_box2');
            $('.item_box2').css({marginLeft:0});
        });
    }
    function prevItem2(){
        $('.item_box2 > li:last').prependTo('.item_box2');
        $('.item_box2').css({marginLeft:-285});
        $('.item_box2').stop().animate({marginLeft:0},); 
    }
    $("#btnL_item2").click(function(){
        prevItem2();
    });
    $("#btnR_item2").click(function(){
        nextItem2();
    });      
});