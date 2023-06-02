$(function(){$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"소설" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
    .done(function( msg ) {
        for( let i in msg.documents){
            let title = msg.documents[i].title; 
            if(title.length >25){
                let title = title.substring(0,23)+"...";
            }           
            
            let t = new Date();
            let time = t.toGMTString(msg.documents[i].datetime).substring(0,17);
            let popular =$("#popular>li").eq(i);
            popular.children("a").find("img").attr("src", msg.documents[i].thumbnail).end()
            .append($("<span>").text(msg.documents[i].publisher))
            .append($("<span>").text(title))
            .append($("<span>").text(msg.documents[i].authors + ",  " + time));
        }
    });      
    function nextPopular() {
        $("#popular").stop().animate({marginLeft:-285},function(){
            $('#popular > li:first').appendTo('#popular');
            $('#popular').css({marginLeft:0});
        });
    }
    function prevPopular(){
        $('#popular > li:last').prependTo('#popular');
        $('#popular').css({marginLeft:-285});
        $('#popular').stop().animate({marginLeft:0},); 
    }
    $("#btnL_popular").click(function(){
        prevPopular();
    });
    $("#btnR_popular").click(function(){
        nextPopular();
    });
});