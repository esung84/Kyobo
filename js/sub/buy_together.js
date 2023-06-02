$(function(){ /*함께 구매한 책 */
    $.ajax({ /*전체*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"알고리즘" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {
        for(let i in msg.documents){
            let together = $(".together_sbox > ul > li").eq(i);
            let title = msg.documents[i].title;
            let authors = msg.documents[i].authors[0] + ", " + msg.documents[i].authors[1];
            if(title.length >8){
                title = title.substring(0,8)+"...";
            }
            if(authors.length > 10){
                authors = authors.substring(0,10)+"...";
            }
            together.children("a").append($("<img>").attr("src", msg.documents[i].thumbnail))
            .append($("<p>").text(title))
            .append($("<span>").text(authors))
            .append($("<p>").text(msg.documents[i].publisher));           
        }
    });
});