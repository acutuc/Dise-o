/* Menú desplegable */
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});

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
$(document).ready(function() {
    checkAcceptCookies();
});

/* Cambio de página a participantes.html al pulsar en un evento en concreto*/
function eventos(){
    document.location.href = "../src/participantes.html";
}

/* Alert al darle a iniciar sesión*/
function alert(){
    alert("INICIO DE SESIÓN")
}