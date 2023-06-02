$(function(){
    let i = 1;
    let price = 14850;
    $("#amount_book i").eq(0).click(function(){
        i--;
        if(i<=1){
            i=1;
        } 
        let total = price*i;
        let total2 = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
           
        $("#amount_book").find("span").text(i);
        $("#totla_price").text(total2 + "원");
        
    });
    $("#amount_book i").eq(1).click(function(){
        i++;
        let total = price*i;
        let total2 = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#amount_book").find("span").text(i);
        $("#totla_price").text(total2 + "원");        
    });
});