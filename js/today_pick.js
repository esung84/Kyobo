$(function(){
  $.ajax({ /*w전체*/
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"오늘" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {     
        
        $(".Today_box1 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday1 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });      
        

    $.ajax({ /*국내도서 */ 
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"내일" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {    
        
        $(".Today_box2 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday2 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });
    $.ajax({ /*외국도서 */ 
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"movie" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {    
        
        $(".Today_box3 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday3 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });
    $.ajax({ /*이북 */ 
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"physics" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {    
        
        $(".Today_box4 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday4 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });
    $.ajax({ /*sam */ 
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"art" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {    
        
        $(".Today_box5 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday5 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });
    $.ajax({ /*핫트랙 */ 
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"퍼즐" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {    
        
        $(".Today_box6 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday6 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });
    $.ajax({ /*교보온리 */ 
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"우주" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
  })
    .done(function( msg ) {    
        
        $(".Today_box7 > li").each(function(i) {
            let bigToday = $(this);
            let text = msg.documents[i].contents;
            let text2 = text.substring(0, 80);
            bigToday.find("img").attr("src", msg.documents[i].thumbnail);
            bigToday.find(".bigText")
              .append($("<span>").text(msg.documents[i].title))
              .append($("<span>").text(msg.documents[i].authors))
              .append($("<span>").text(msg.documents[i].price+"원"))            
              .append($("<p>").text(msg.documents[i].publisher))
              .append($("<p>").text(text2+"..."));
          });
    
          $(".smallToday7 li").each(function(i) {
            let small = $(this);
            small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
              .append($("<span>").text(msg.documents[i + 1].title));
          });
    });     
        

});
$(function(){

  
$(".Today_box1").show().siblings().hide();
$(".smallToday1").show().siblings().hide();

    $("#todayMenu > li").click(function(){
      let i = $(this).index() + 1;
      $(".Today_box"+i).show().siblings("ul").hide();
      $(this).addClass("purple").siblings().removeClass("purple");
      $(".Today_box"+i +"> li").find("span").eq(0).text($(this).text());
      $(".smallToday"+i).show().siblings("ul").hide();
    }); 

    let i=0
    
    
    function nextToday(){
      let num = $("#todayMenu .purple").index()+1; 
        $('.smallToday'+num).stop().animate({marginLeft:-150}, function(){
            $('.smallToday'+num +' > li:first').appendTo('.smallToday'+num);
            $('.smallToday'+num).css({marginLeft:0});
          });
        $(".Today_box"+num).stop().animate({marginLeft:-632}, function(){
          $(".Today_box"+num +' > li:first').appendTo(".Today_box"+num);
          $(".Today_box"+num).css({marginLeft:0});
        });       
      };

    function prevToday(){
      let num = $("#todayMenu .purple").index()+1; 
      $('.smallToday'+num +'> li:last').prependTo('.smallToday'+num);
      $('.smallToday'+num).css({marginLeft:-150});
      $('.smallToday'+num).stop().animate({marginLeft:0},);
    
      $(".Today_box"+num +'> li:last').prependTo(".Today_box"+num);
      $(".Today_box"+num).css({marginLeft:-150});
      $(".Today_box"+num).stop().animate({marginLeft:0},);                    
      };

    $("#btnR_today").click(function(){
      nextToday();
    });
    $("#btnL_today").click(function(){
      prevToday();
    });

})