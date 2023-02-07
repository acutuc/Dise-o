/*
$(document).ready(
    () => {
        $("div#news > article.noticia > img").hover(
            function(){
                $(this).siblings().toggle()
            }
        )
    }
)
*/
/*
$(document).ready(
    () => {
            $("div#news > article.noticia > img").click(
                function () {
                    $(this).siblings().toggle()
                }
            )
            $("div#news > article.noticia > img").dblclick(
                function () {
                    $(this).siblings().toggle()
                }
            )
    }
)
*/

$(document).ready(function () {
    $(document).keypress(function (e) {
        e.preventDefault();
        $("#tecla-pulsada").html(e.which + ": " + String.fromCharCode(e.which))
        if (String.fromCharCode(e.which) == "d") {
            $("div#news > article.noticia > img").siblings().toggle()
        }
    }
    )
})
