$(function(){
    $("#top_popup i").click(function(){ /*top 배너 닫기 */
       $("#top_popup").slideUp("500");
       $("header").animate({ height: "200px"},"500");            
    });    
        
      $(window).scroll(function() { /*사이드 배너 위치 고정 */ 
        let scrollTop = $(window).scrollTop();       
        if( scrollTop > 280){
            $("#top_fixed").slideDown("fast");
           }
        if ( scrollTop < 280){
            $("#top_fixed").slideUp("fast");
        } 
      }); 
});