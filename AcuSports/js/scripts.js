const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});

/* COOKIES */
function checkAcceptCookies() {
    if (localStorage.acceptCookies == 'true') {
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