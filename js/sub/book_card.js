$(function(){
    let slide = $(".book_card >ul")
    $("#btnL_bookCard").click(function(){
        slide.find("li:last").prependTo(slide);
        slide.css({marginLeft:-410});
        slide.stop().animate({marginLeft:0});     
    });
    $("#btnR_bookCard").click(function(){
        slide.stop().animate({marginLeft:-410},function(){
            slide.children("li").eq(0).appendTo(slide);
            slide.css({marginLeft:0});
        })       
    });    
    $("#book_card").on("mouseover", function() {
        $("#book_card i").stop().fadeTo("fast",1);
      }).on("mouseout", function() {
        $("#book_card i").stop().fadeTo("slow",0);
      });
});