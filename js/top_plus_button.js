$(function () {
    let i = 0;
    $(".menu_bar2 img").click(function () {
        let plusButton = ["img/plus_button2.png", "img/plus_button.png"];
        $(this).attr("src", plusButton[i]);
        $("#bar2_slide").slideToggle("fast");
        i++;
        if (i > 1) i = 0;
    });
});