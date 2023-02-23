$(document).ready(function () {

    //1. VOLVER ARRIBA
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $("#volverarriba").fadeIn(1000);
        } else {
            $("#volverarriba").fadeOut(1000);
        }
    });

    $('#volverarriba').click(function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    //2. MOSTRAR MENÚ:
    $('nav#menu-principal > span').click(function () {
        if ($(window).scrollTop() > 0) {
            $('header').animate({
                'left': '18rem'
            }, 1000);
        }
        $('ul#menu').css('display', 'block');
        $('div#principal').animate({
            'left': '18rem'
        }, 1000);
        $('ul#menu').animate({
            'left': '0'
        }, 1000);
        $('div#desplazable').fadeIn(1000);
        $('body').css('overflow-y', 'hidden');
    });

    $('div#desplazable').click(function () {
        $(this).fadeOut(1000);
        if ($(window).scrollTop() > 0) {
            $('header').animate({
                'left': '0'
            }, 1000);
        }
        $('ul#menu > li>ul').hide(500);
        $('div#principal').animate({
            'left': '0'
        }, 1000);
        $('ul#menu').animate({
            'left': '-18rem'
        }, 1000, function () {
            $('ul#menu').css('display', 'none');
        });
        $('body').css('overflow-y', 'auto');
    });

    //3 y 4. MOSTRAR SUBMENÚ Y GIRAR:
    $('ul#menu > li').click(function () {
        $(this).children('ul').stop(false, true);
        if ($(this).children('ul').css('display') == "block") {
            $(this).find('i').toggleClass('fa fa-angle-up fa fa-angle-down');
            $(this).children('ul').hide(500);
        } else {
            $(this).find('i').toggleClass('fa fa-angle-down fa fa-angle-up');
            $(this).children('ul').show(500);
            $(this).siblings().children('ul').hide(500);
            $(this).siblings().find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
        }
    });

    //5. CABECERA (mirar css la clase menu_fijo)
    $(document).scroll(function () {
        $('header').addClass('menu_fijo');
        $('header p#promo').hide(500);
        if ($(this).scrollTop() == 0) {
            $('header').removeClass('menu_fijo');
            $('header p#promo').show(500);
        }
    });

    //6. CAMBIAR IMÁGEN:
    $("article > a > picture").hover(function () {
        console.log($(this).children().attr("src"));
        if ($(this).children().attr("src") == "img/zapato1.jpg") {
            $(this).children().attr("src", "img/zapato1-1.jpg");
        } else if ($(this).children().attr("src") == "img/zapato2.jpg") {
            $(this).children().attr("src", "img/zapato2-1.jpg");
        } else {
            $(this).children().attr("src", "img/zapato3-1.jpg");
        }
    }, function () {
        if ($(this).children().attr("src") == "img/zapato1-1.jpg") {
            $(this).children().attr("src", "img/zapato1.jpg");
        } else if ($(this).children().attr("src") == "img/zapato2-1.jpg") {
            $(this).children().attr("src", "img/zapato2.jpg");
        } else {
            $(this).children().attr("src", "img/zapato3.jpg");
        }
    }
    );

});

//velo = desplazable