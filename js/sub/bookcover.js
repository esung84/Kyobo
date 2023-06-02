$(function () {
    var isRotated = false;
  
    $("#bookCover").click(function () {
      if (isRotated) {
        $(this).css("transform", "rotateY(35deg)");
        isRotated = false;
      } else {
        $(this).css("transform", "rotateY(180deg)");
        isRotated = true;
      }
    });
  
    $("#bookCover").hover(
      function () {
        if (!isRotated) {
          $(this).css("transform", "rotateY(35deg)");
        }
      },
      function () {
        if (!isRotated) {
          $(this).css("transform", "rotateY(0deg)");
        }
      }
    );
  });

