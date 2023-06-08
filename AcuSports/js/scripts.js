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
        } else {
            $('header').removeClass('header-fijo');
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
function checkAcceptCookies() {
    if (localStorage.acceptCookies == 'true') {
        $('#div-cookies').show(); // <---------------------------------- Quitar esta línea. La dejo para que Lorite vea las cookies.
    } else {
        $('#div-cookies').show();
    }
}
function acceptCookies() {
    localStorage.acceptCookies = 'true';
    $('#div-cookies').hide();
}
$(document).ready(function () {
    checkAcceptCookies();
});