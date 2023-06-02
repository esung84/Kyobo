$(function(){
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"성공" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
    .done(function( msg ) {
        for( let i in msg.documents){
            let title = msg.documents[i].title;
            let sale = (msg.documents[i].price-msg.documents[i].sale_price)/msg.documents[i].price*100;
            let price =  msg.documents[i].sale_price;
            let price2 =price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
            let index = Number(i)+1;
            if(title.length > 15){
                title = title.substring(0,14)+"...";
            }         
            let bestC =$(".recomend_books").find(".best_categories>li").eq(i);
            bestC.children("a").find("img").attr("src", msg.documents[i].thumbnail).end();
            bestC.find(".bst_ct_box").append($("<h6>").text(index))
            .append($("<h5>").text(title))
            .append($("<p>").text(msg.documents[i].authors[0]))
            .append($("<span>").eq(0).text(Math.floor(sale)+ "%"))
            .append($("<span>").eq(0).text(price2 +"원"))
        }
    });
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"멘탈" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
        })
        .done(function( msg ) {
            for( let i in msg.documents){
                let title = msg.documents[i].title;
                let sale = (msg.documents[i].price-msg.documents[i].sale_price)/msg.documents[i].price*100;
                let price =  msg.documents[i].sale_price;
                let price2 =price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
                let index = Number(i)+1;
                if(title.length > 15){
                    title = title.substring(0,14)+"...";
                } 
                        
                let bestC =$(".recomand_new").find(".best_categories>li").eq(i);
                bestC.children("a").find("img").attr("src", msg.documents[i].thumbnail).end();
                bestC.find(".bst_ct_box").append($("<h6>").text(index))
                .append($("<h5>").text(title))
                .append($("<p>").text(msg.documents[i].authors[0]))
                .append($("<span>").eq(0).text(Math.floor(sale)+ "%"))
                .append($("<span>").eq(0).text(price2 +"원"))
            }
        }); 
});