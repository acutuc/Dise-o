
window.onload = function () {
    /* Menú desplegable */
    $('div#sidebar').click(function () {
        $('main#principal').animate({
            'opacity': '0.2'
        }, 500)
        $(this).toggleClass('active')
    })
    if($('div#sidebar').hasClass('desactivado')){
        $('main#principal').animate({
            'opacity' : '1'
        }, 500)
    }

    /* Header fijo al hacer scroll*/
    $(this).scroll(function () {
        $('header').addClass('menu_fijo');
        if ($(this).scrollTop() == 0) {
            $('header').removeClass('menu_fijo');
        }
    });

}

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