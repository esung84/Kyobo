$(function(){$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"르네상스" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
    .done(function( msg ) {
        for( let i in msg.documents){
            let title = msg.documents[i].title; 
            if(title.length >25){
                title = title.substring(0,23)+"...";
            }           
            
            let original =$("#original>li").eq(i);
            original.children("a").find("img").attr("src", msg.documents[i].thumbnail).end()
            .append($("<span>").text(msg.documents[i].publisher))
            .append($("<span>").text(title))
            .append($("<span>").text(msg.documents[i].authors));
        }
    });      
    function nextOriginal() {
        $("#original").stop().animate({marginLeft:-285},function(){
            $('#original > li:first').appendTo('#original');
            $('#original').css({marginLeft:0});
        });
    }
    function prevOriginal(){
        $('#original > li:last').prependTo('#original');
        $('#original').css({marginLeft:-285});
        $('#original').stop().animate({marginLeft:0},); 
    }
    $("#btnL_original").click(function(){
        prevOriginal();
    });
    $("#btnR_original").click(function(){
        nextOriginal();
    });
});