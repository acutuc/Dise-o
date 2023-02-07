$(document).ready(function () {

    $("input").focusin(function(e){
        $(this).css("background-color", "lightgrey")
    })

    $("input").focusout(function(e){
        $(this).css("background-color", "white")
    })

});