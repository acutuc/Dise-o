$(document).ready(function () {
    $(window).scroll(function () {
        $("#volverarriba").fadeIn(1000);
    });
});

$(document).ready(function () {
    $('#volverarriba').click(function (e) {
        $(this).fadeOut(1000)
    });
});