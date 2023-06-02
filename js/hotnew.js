$(function(){
    $.ajax({
      method: "GET", /*전체 */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"사랑" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box1 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $.ajax({
      method: "GET",/*국내 */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"미술" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box2 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $.ajax({
      method: "GET",/*국외 */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"economy" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box3 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $.ajax({
      method: "GET",/*이북 */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"웹소설" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box4 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $.ajax({
      method: "GET",/*sam */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"고양이" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box5 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $.ajax({
      method: "GET",/*핫트랙스 */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"쿠킹" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box6 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $.ajax({
      method: "GET",/*교보 */
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"교보문고" },
      headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
      .done(function( msg ) {
      for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let hotNew =$(".hotnew_box7 a").eq(i);
        hotNew.append($("<img>").attr("src", msg.documents[i].thumbnail))
          .append($("<span>").text(title2))
          .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
      }
    });
    $(".hotnew_box3").siblings("ul").hide();
    $("#title_today > li").click(function(){
      let i = $(this).index() + 1;
      $(".hotnew_box"+i).show().siblings("ul").hide();
      $(this).addClass("purple").siblings().removeClass("purple");
    }); 

    function nextHotnew() {
        let num = $("#title_today .purple").index()+1; 
      $(".hotnew_box" + num).stop().animate({marginLeft:-230},function(){
        $('.hotnew_box' + num + '> li:first').appendTo('.hotnew_box' + num);
        $('.hotnew_box' + num).css({marginLeft:0});
      });
    }
    function prevHotnew(){
        let num = $("#title_today .purple").index()+1;
      $('.hotnew_box' + num + '> li:last').prependTo('.hotnew_box' + num);
      $('.hotnew_box' + num).css({marginLeft:-230});
      $('.hotnew_box' + num).stop().animate({marginLeft:0},);
    }
    $("#btnL_hotnew").click(function(){
      prevHotnew();
    });
    $("#btnR_hotnew").click(function(){
      nextHotnew();
    });
  });