$(document).ready(function () {

    //1
    //a:
    $("div#cookies").css({
        "display": "flex"
    })
    $("div#cookies > span").click(function (e) {
        e.preventDefault();
        $("div#cookies").fadeOut(500);
    })

    //2
    //i: -------------------------------------------------
    $("div#hamburger").click(function (e) {
        e.preventDefault();

        if ($("ul#menu-toggle").css("display") === "flex") {
            $("body").stop(true).animate({
                "display": "block",
                "left": "400px"
            }, "fast")
            $("ul#menu-toggle").stop(true).animate({
                "display": "block",
                "left": "0px"
            });
        } else {
            $("body").stop(true).animate({
                "display": "flex",
                "margin-left": "0px"
            })
            $("ul#menu-toggle").stop(true).animate({
                "left": "0px"
            })
        }
        console.log($("ul#menu-toggle").css("display"))
    })


    //3
    //a, b:
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("div#contenido > header#home-header").css("position", "fixed")
            $("main#articulo").animate({
                marginTop: "100px"
            })
            $("div#contenido > header#home-header").css({
                "width": "100%"
            })
            $("div#contenido > header#home-header > div#promo > p").fadeOut(500);
        } else {
            $("div#contenido > header#home-header > div#promo > p").fadeIn(500);
        }
    })

    //c:
    $("img#lupa").click(function (e) {
        e.preventDefault();

        $("div#searcher").stop(true).fadeIn(500)

    });
    $("div#searcher > span#cerrar").click(function (e) {
        e.preventDefault();

        $("div#searcher").fadeOut(500);
    });

    //4
    //a, b:
    $("#shop > span").click(function (e) {
        e.preventDefault();
        let num = 4;

        $("div#contenido > header#home-header > div#shopping").stop(true).slideToggle().delay(1000).slideToggle();
        //$("#iconos > ul > li:nth-child(3) > a").text(substr())
        console.log($("#iconos > ul > li:nth-child(3) > a").text())
    });

    //5
    //a, b:
    $("main#articulo > article.producto > ul > li:nth-child(1)").click(function (e) {
        e.preventDefault();

        if ($("main#articulo > article.producto > ul > li:nth-child(2)").css("display") === "none") {
            $("main#articulo > article.producto > ul > li:nth-child(2)").stop(true).slideToggle()
            $("main#articulo > article.producto > ul > li:nth-child(1) > img.down-icon").stop(true).rotate(180)
        } else {
            $("main#articulo > article.producto > ul > li:nth-child(2)").stop(true).slideToggle()
            $("main#articulo > article.producto > ul > li:nth-child(1) > img.down-icon").stop(true).rotate(-180)

        }
    });

    //6
    //a:
    $("#wishlist > img").click(function (e) {
        e.preventDefault();
        if ($("#wishlist > img").attr("src") === "img/heart.png") {
            $("#wishlist > img").attr("src", "img/heart-full.png")
        } else {
            $("#wishlist > img").attr("src", "img/heart.png")
        }
    })

    //7
    //a:
    $("div#newsletter > form#form-newsletter > input#mail").blur(function (e) {

        if ($("div#newsletter > form#form-newsletter > input#mail").val().length === 0) {
            $("#form-newsletter > span").css({
                "visibility": "visible"
            })
        } else {
            $("#form-newsletter > span").css({
                "visibility": "hidden"
            })
        }

    });

    //b, c:
    $("#form-newsletter > input[type=submit]:nth-child(5)").click(function (e) {
        e.preventDefault();
        if ($("div#newsletter > form#form-newsletter > input#mail").val().length === 0) {
            $("#form-newsletter > span").css({
                "visibility": "visible"
            })
        } else {
            $("#form-newsletter > span").css({
                "visibility": "hidden"
            })
        }
        if($("#politica:checked").val() === "on"){
            $("#form-newsletter > div > span").css({
                "visibility": "hidden"
            })
        }else{
            $("#form-newsletter > div > span").css({
                "visibility": "visible"
            })
        }
    });

    //d:
    $("#form-newsletter > input[type=submit]:nth-child(5)").mouseenter(function () { 
        $(this).animate({
            "background-color" : "black",
            "color" : "white"
        })
    });

    $("#form-newsletter > input[type=submit]:nth-child(5)").mouseleave(function(){
        $(this).animate({
            "background-color" : "white",
            "color" : "black"
        })
    });




});