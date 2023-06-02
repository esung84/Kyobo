$(function(){ /*키워드  */
    $.ajax({ /*콘퍼런스*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"콘퍼런스" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {        
        for(let i in msg.documents){
            let keyword = $(".keyword_box > ul:first").children("li").eq(i);
            keyword.find("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
        }
    });
    $.ajax({ /*김경숙*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"김경숙" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {        
        for(let i in msg.documents){
            let keyword = $(".keyword_box > ul").eq(1).children("li").eq(i);
            keyword.find("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
        }
    });
    $.ajax({ /*포스터*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"포스터" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {        
        for(let i in msg.documents){
            let keyword = $(".keyword_box > ul").eq(2).children("li").eq(i);
            keyword.find("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
        }
    });
    $.ajax({ /*에베레스트*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"에베레스트" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {        
        for(let i in msg.documents){
            let keyword = $(".keyword_box > ul").eq(3).children("li").eq(i);
            keyword.find("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
        }
    });
    $.ajax({ /*커리어*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"커리어" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })    
    .done(function( msg ) {        
        for(let i in msg.documents){
            let keyword = $(".keyword_box > ul").eq(4).children("li").eq(i);
            keyword.find("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
        }
    });
    $.ajax({ /*수영*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"수영" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {        
        for(let i in msg.documents){
            let keyword = $(".keyword_box > ul").eq(5).children("li").eq(i);
            keyword.find("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
        }
    });
    $(".keyword_box >ul").eq(0).siblings("ul").hide();
    $("#keyword > li").mouseover(function(){        
        let i = $(this).index();
        $(".keyword_box >ul").eq(i).show().siblings("ul").hide();
    });
});