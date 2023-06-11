$(document).ready(function () {

    // Función para abrir el menú
    function abrirMenu() {
        $('main').animate({
            'opacity': '0.2'
        }, 500);
        $('div#sidebar').addClass('active');
    }

    // Función para cerrar el menú
    function cerrarMenu() {
        $('main').animate({
            'opacity': '1'
        }, 500);
        $('div#sidebar').removeClass('active');
    }

    // Evento al hacer clic en el menú
    $('div#sidebar').click(function () {
        if ($(this).hasClass('active')) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    // Evento al hacer clic en cualquier parte fuera del menú para cerrarlo
    $(document).click(function (event) {
        var target = $(event.target);
        if (!target.closest('div#sidebar').length && $('div#sidebar').hasClass('active')) {
            cerrarMenu();
        }
    });

    // Header fijo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header-fijo');
            $("main").css({ "padding-top": "75px" })
        } else {
            $('header').removeClass('header-fijo');
            $("main").css({ "padding-top": "0px" })
        }
    });

    // Control de colores en el hover cada evento deportivo
    $('div.green').hover(function () {
        // over
        $(this).css({
            "background-color": "#11ad3d"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#54FF84"
        })
    }
    );

    $('div.evento').hover(function () {
        // over
        $(this).css({
            "background-color": "#89d47d"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#9FFF90"
        })
    }
    );

    $('div.red').hover(function () {
        // over
        $(this).css({
            "background-color": "#9e423b"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#EB7169"
        })
    }
    );

    $('div.brown').hover(function () {
        // over
        $(this).css({
            "background-color": "#a7763b"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#EBB069"
        })
    }
    );

    $('div.blue').hover(function () {
        // over
        $(this).css({
            "background-color": "#3578b8"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#5DB0FD"
        })
    }
    );

    // Volver arriba:
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("#go-up").fadeIn(500);
            $("header").css({
                "position": "fixed",
                "width": "100%",
                "opacity": "0.9"
            })
        } else {
            $("#go-up").fadeOut(500)
            $("header").removeAttr("style")
        }
    });

    $("#go-up").click(function (e) {
        e.preventDefault();

        $("html, body").stop(true).animate({
            scrollTop: 0
        }, "swing")
    });

    //Ver perfil en participantes:
    $("span.circulo").hover(function () {
        // over
        $(this).css({
            "background-color": "#1f1f1f",
            "opacity" : "0.5"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#D9D9D9"
        }).ap
    })

    //Iniciar sesión en participantes:
    $("a#iniciar").hover(function () {
        // over
        $(this).css({
            "background-color": "#14570b"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#3B9E2D"
        }).ap
    })

    //Menú lateral
    $("ul > a > li").hover(function () {
        // over
        $(this).css({
            "background-color": "#14570b"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#787575"
        })
    })

    //RRSS Footer:
    $("i.fa-instagram").hover(function () {
        // over
        $(this).css({
            "color": "pink"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })

    $("i.fa-facebook").hover(function () {
        // over
        $(this).css({
            "color": "blue"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })

    $("i.fa-whatsapp").hover(function () {
        // over
        $(this).css({
            "color": "green"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })

    $("i.fa-twitter").hover(function () {
        // over
        $(this).css({
            "color": "lightblue"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })
});

/* Cambio de página a participantes.html al pulsar en un evento en concreto*/
function eventos() {
    document.location.href = "../src/participantes.html";
}

/* Alert al darle a iniciar sesión*/
function alert() {
    alert("INICIO DE SESIÓN")
}

/* COOKIES */
function checkAceptarCookies() {
    if (localStorage.aceptarCookies == 'true') {
        $('#div-cookies').show(); // <---------------------------------- Quitar esta línea. La dejo para que Lorite vea las cookies.
    } else {
        $('#div-cookies').show();
    }
}
function aceptarCookies() {
    localStorage.aceptarCookies = 'true';
    $('#div-cookies').hide();
}
$(document).ready(function () {
    checkAceptarCookies();
});