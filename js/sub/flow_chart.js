$(function(){
    $("#flow_chart >li").children("div").hide();

    $("#flow_chart >li").mouseover(function(){
        $(this).children("div").stop().slideDown("fast");
    });
    $("#flow_chart >li").mouseleave(function(){
        $(this).children("div").stop().slideUp("fast");
    });
});