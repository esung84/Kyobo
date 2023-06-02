$(function(){ 
    /*작가 정보*/
    $(".content").find(".show_btn").children("span").eq(0).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("auto");
    });
    $(".content").find(".show_btn").children("span").eq(1).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("80px");
    });
     /*목차*/
    $(".list_title").find(".show_btn").children("span").eq(0).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("auto");
    });
    $(".list_title").find(".show_btn").children("span").eq(1).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("150px");
    });
     /*책 속으로*/
    $(".page_book").find(".show_btn").children("span").eq(0).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("auto");
    });
    $(".page_book").find(".show_btn").children("span").eq(1).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("100px");
    });
     /*출판사 서평*/
    $(".comments").find(".show_btn").children("span").eq(0).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("auto");
    });
    $(".comments").find(".show_btn").children("span").eq(1).click(function(){
        $(this).hide().siblings().show();
        $(this).parent().siblings(".text").height("100px");
    });
});