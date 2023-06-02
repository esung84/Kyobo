$(function(){
    $.ajax({
        url:"./json/thisweek.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                    let thisweek = $(".this_week > li").eq(i);
                    thisweek.children("a").find("img").attr("src", data[i].src).end()
                    .append($("<span>").text(data[i].title))
                    .append($("<span>").text(data[i].author + "·" + data[i].puplisher))
                    .append($("<span>").text(data[i].price));                                   
                }
            }
        }
    });
});
