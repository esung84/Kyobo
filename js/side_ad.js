$(function(){
    $("#button_ad i:first").click(function(){
        $(this).css("color","#ddd").siblings("i").css("color","gray");
        $("#button_ad").parent().find("img").attr("src","img/side_ad2.png");
        $("#button_ad li:first").text("01");
    });
    $("#button_ad i:last").click(function(){
        $(this).css("color","#ddd").siblings("i").css("color","gray");
        $("#button_ad").parent().find("img").attr("src","img/side_ad3.jpg");
        $("#button_ad li:first").text("02");
    });
    $(window).scroll(function() { /*사이드 배너 위치 고정 */ 
    let scrollTop = $(window).scrollTop();       
    if( scrollTop > 800){
        $("#side_ad").css("top",scrollTop-100);
       }
    if( scrollTop > 1200){
        $("#top_button").css("top",scrollTop+450);
    } 
  });
  
  $( '#top_button' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
	return false;
} );
});