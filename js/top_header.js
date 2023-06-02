
$(function () {                        
    let i = 0;
    let icon = ["fa-sharp fa-solid fa-angle-down", "fa-sharp fa-solid fa-angle-up"];
    $("#more_brand").click(function () { /*브랜드 더보기 클릭*/      
      $("#brand_minibox").slideToggle();
      $(this).find("i").removeClass().addClass(icon[i]);
      i++;
      if (i > 1) i = 0;
    });
    $("#membership").click(function () { /*회원혜택 더보기 클릭*/      
      $("#membership").find("div").slideToggle();
      $(this).find("i").removeClass().addClass(icon[i]);
      i++;
      if (i > 1) i = 0;
    });
  });