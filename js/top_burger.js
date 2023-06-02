$(function () {/*햄버거 메뉴 아이콘*/
let icon = ["img/x-button.png", "img/o-button.png"];
let i = 0;
$("#menu_icon").click(function () { 
  $(".nav_bigbox").toggle();
  $(this).attr("src", icon[i]);
  i++;
  if (i > icon.length - 1) i = 0;
});
$("#menu_icon2").click(function () { /* 고정바 햄버거 메뉴*/
  let scrollTop = $(window).scrollTop();  
  $(".nav_bigbox").toggleClass("nav_loc").toggleClass("fixed").toggle();  
  $(this).attr("src", icon[i]);
  i++;
  if (i > icon.length - 1) i = 0;
});




$(".nav_box1").eq(1).hide(); /* 카테고리 전체보기 or 서비스 전체보기 선택 창*/
$(".nav_menu >li").click(function () {
  $(this).css({ "background-color": "#fff", "color": "#000" }).children(".nav_box1").show();
  $(this).siblings().css({ "background-color": "#ddd", "color": "gray" }).children(".nav_box1").hide();
});




$(".nav_box1 > ul > li").not(":first").children().hide() /* 카테고리 전체보기 제어  */
$(".nav_box1 > ul > li").click(function () {
  $(this).children().show();
  $(this).siblings().children().hide();
});



$("#korean").click(function () { /* 카테고리 전체보기 - 교보문고 제어*/
  $(this).addClass("blue").siblings().removeClass("blue"); 
  $(".all_book").find("span").eq(0).text($(this).text() + " 전체");
  $(".books_kb ul").hide();
  $(".books_kb").find(".korean_book").show();

});
$("#western").click(function () {
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".all_book").find("span").eq(0).text($(this).text() + " 전체");
  $(".books_kb ul").hide();
  $(".books_kb").find(".western_book").show();

});
$("#japanese").click(function () {
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".all_book").find("span").eq(0).text($(this).text() + " 전체");
  $(".books_kb ul").hide();
  $(".books_kb").find(".japanese_book").show();
});
$("#only_kb").click(function () {
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".all_book").find("span").eq(0).text($(this).text() + " 전체");
  $(".books_kb ul").hide();
  $(".books_kb").find(".only_book").show();
});
$(".e_list_button").click(function () {
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".ebook_left").find("span").text("일반");
  $(".e_list").show();
  $(".a_list, .m_list, .p_list, .s_list").hide();
});



$(".a_list_button").click(function () { /*eBook , sam  메뉴 제어*/
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".ebook_left").find("span").text("일반");
  $(".a_list, .s_list").show();
  $(".e_list, .m_list, .p_list").hide();
});
$(".m_list_button").click(function () {
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".ebook_left").find("span").text("학습/자기계발");
  $(".m_list, .s_list").show();
  $(".a_list, .e_list, .p_list").hide();
});
$(".p_list_button").click(function () {
  $(this).addClass("blue").siblings().removeClass("blue");
  $(".ebook_left").find("span").text("사회과학");
  $(".p_list").show();
  $(".a_list, .m_list, .e_list, .s_list").hide();
});
});