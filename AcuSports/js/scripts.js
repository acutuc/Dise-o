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
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('header').addClass('header-fijo');
        } else {
          $('header').removeClass('header-fijo');
        }
      });
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