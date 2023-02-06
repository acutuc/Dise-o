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