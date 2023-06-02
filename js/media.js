$(function () {
    let mediaImg = ["img/media1.jpg","img/media2.jpg","img/media3.jpg","img/media4.jpg"];
    let title =["고요한 포옹","Hopper","곽재식의 유령 잡는 화학자","나는 매일, 내가 궁금하다"]
    let author =["마음산책(박연준)","Taschen(Renner, Rolf G)","김영사(곽재식)","권지안(솔비)"]
    let textBox =["상상은 글쓴이의 몫이다","에드워드 호퍼 전시회 굿즈 기획전","스파이더맨이나 냉동 인간을 만들어 부활시킬 수 있는 과학 기술이 나올까요?","권지안(솔비), 남과 비교하며 사는 것보단 내가 행복한 게 좋잖아요?"]
    let mediaImg2 = ["img/media_1.jpg","img/media_2.jpg","img/media_3.jpg","img/media_4.jpg"]
    let i = 0;

    $("#btnR_media").click(function () {
        i++;
        if(i >= title.length-1){ 
            i = 3;                                 
        }        
           /*작은 책 박스 컨트롤 */   
            $(".media_photo1 div:first").find("img").attr("src",mediaImg[i])
            .end().find("p").text(title[i])
            .end().find("span").text(author[i]);
             /*외부 박스 텍스트 컨트롤 */
            $(".media_textbox1").children("p").text(textBox[i]);
            $(".play_box,.backImg").css("background-image", "url(" + mediaImg2[i] + ")");
    });  
    $("#btnL_media").click(function () {
        i--;
        if(i <= 0) { 
            i = 0;           
        }
           /*작은 책 박스 컨트롤 */   
            $(".media_photo1 div:first").find("img").attr("src",mediaImg[i])
            .end().find("p").text(title[i])
            .end().find("span").text(author[i]);
             /*외부 박스 텍스트 컨트롤 */
            $(".media_textbox1").children("p").text(textBox[i]);
            $(".play_box,.backImg").css("background-image", "url(" + mediaImg2[i] + ")");
    });    
});