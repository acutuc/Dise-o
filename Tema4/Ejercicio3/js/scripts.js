$(document).ready(function () {
    $("li").hover(function () {
            $(this).css("background-color", "lightblue")        
        }, function () {
            $(this).css("background-color", "white")
        }
    );
});