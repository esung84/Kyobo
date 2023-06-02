$(function(){
    $.get("./txt/intro_media.txt", function(data) {
      $(".intro_media").html(data);
    })
    $.get("./txt/writer_box.txt", function(data) {
        $(".writer_box").find(".text").html(data);
    })
    $.get("./txt/list_title.txt", function(data) {
        $(".list_title").find(".text").html(data);
    })
    $.get("./txt/page_book.txt", function(data) {
        $(".page_book").find(".text").html(data);
    })
    $.get("./txt/comments.txt", function(data) {
        $(".comments").find(".text").html(data);
    })  
 });
