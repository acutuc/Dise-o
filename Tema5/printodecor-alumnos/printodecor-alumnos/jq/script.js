$(document).ready(function () {

    //1:
    //a, b, c, d:
    $("#hamburger").click(function (e) {
        e.preventDefault();

        if ($("ul#menu-toggle").css("display") === "block") {
            $("ul#menu-toggle").stop(true).slideToggle();
            $("div#hamburger > span:nth-child(2)").stop(true).animate({ "width": "1.37rem", "background-color": "black" });
            $(".line-ham").animate({ "background-color": "black" });

        } else {
            $("ul#menu-toggle").stop(true).slideToggle();
            $("div#hamburger > span").stop(true).animate({ "width": "1.87rem", "background-color": "#FF600A" });
            $(".line-ham").animate({ "background-color": "#FF600A" });
        }
    });

    //e:
    $("#menu-toggle > li:nth-child(3) > a").click(function (e) {
        e.preventDefault();

        if ($("#menu-toggle > li:nth-child(3) > ul").css("display") === "none") {
            $("#menu-toggle > li:nth-child(3) > ul").slideToggle()
            $("#menu-toggle > li:nth-child(3) > ul").animate({ "left": "0.02rem" })
            $("#menu-toggle > li:nth-child(3) > span").html("-")
        } else {
            $("#menu-toggle > li:nth-child(3) > ul").stop(true).animate({ "display": "none" })
            $("#menu-toggle > li:nth-child(3) > ul").slideToggle()
            $("#menu-toggle > li:nth-child(3) > span").html("+")
        }
    });

    //f:
    $(window).resize(function () {
        $(".line-hamb").removeAttr("style");
        $("#menu-toggle").removeAttr("style");
    });

    //2:
    //a:
    $("#barra-social").fadeIn(500);

    //b:
    $("#chat").fadeIn(500);

    //c:
    $("#chat").click(function (e) {
        e.preventDefault();

        $(this).children().slideToggle()
    })

    //d:
    $("#chat > header#header-chat2 > span").click(function (e) {

        e.preventDefault();

        $("#chat").slideToggle();
    });

    //3:
    //a:
    $("article.producto").mouseenter(function () {
        $(this).children("a").css("display", "flex")
    });

    //b:
    $("article.producto").mouseleave(function () {
        $(this).children("a").slideUp(300)
    });


    //5:
    //a, b:
    $(window).scroll(function () {
        if($(this).scrollTop() > 0){
            $("#go-up").fadeIn(500);
            $("header").css({
                "position" : "fixed",
                "width" : "100%", 
                "opacity" : "0.9"
            })
        }else{
            $("#go-up").fadeOut(500)
            $("header").removeAttr("style")
        }
    });

    //c:
    $("#go-up").click(function(e){
        e.preventDefault();

        $("html, body").stop(true).animate({
            scrollTop : 0
        }, "swing")
    });

    //6:
    //a:
    $("#window-chat>input").blur(function(){

        if ($(this).val().length == 0 && $("#chat > div#window-chat > input").prop("required")){
            $(this).siblings("span").html("** Campo obligatorio **")
            $(this).next("span").css("visibility", "visible")
        }
        
    })
    //b:
    $("#mensaje").keypress(function (e) { 
        let caracteres = 100;
        console.log(caracteres-1)
    });

    console.log(key)
});