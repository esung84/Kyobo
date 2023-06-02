$(function(){
    $.ajax({
        url:"./json/hit_item.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                    let hit_item = $(".item_box1 > li").eq(i);
                    hit_item.find("img").attr("src", data[i].src);                    
                    hit_item.find("div").append($("<p>").text(data[i].title))
                    .append($("<span>").text(data[i].discount))
                    .append($("<span>").text(data[i].price));
                }
            }
        }
    }); 
    $(".item_box1 > li").on({
        mouseover :function(){
            $(this).find("div").show();
        },
        mouseout:function(){
            $(this).find("div").hide();
        }
    });
    function nextHit() {
        $(".item_box1").stop().animate({marginLeft:-285},function(){
            $('.item_box1 > li:first').appendTo('.item_box1');
            $('.item_box1').css({marginLeft:0});
        });
    }
    function prevHit(){
        $('.item_box1 > li:last').prependTo('.item_box1');
        $('.item_box1').css({marginLeft:-285});
        $('.item_box1').stop().animate({marginLeft:0},); 
    }
    $("#btnL_hititem").click(function(){
        prevHit();
    });
    $("#btnR_hititem").click(function(){
        nextHit();
    });      
});