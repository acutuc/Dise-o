$(document).ready(function () {
    $(window).scroll(function () {
        $("div#contenido").css("padding-top", "62px")
        $("div.navbar").css("position", "fixed");
        $("div.navbar").css("background-color", "white");
        $("div.navbar").css("opacity", "0.9");
        $("div.navbar > div.container > div.menu-items").css("background-color", "white");
    });
    $(window).resize(function () { 
        $("input.checkbox").prop("checked", false);
    });
});