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
            $("main").css({ "padding-top": "75px" })
        } else {
            $('header').removeClass('header-fijo');
            $("main").css({ "padding-top": "0px" })
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

    // Volver arriba:
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("#go-up").fadeIn(500);
            $("header").css({
                "position": "fixed",
                "width": "100%",
                "opacity": "0.9"
            })
        } else {
            $("#go-up").fadeOut(500)
            $("header").removeAttr("style")
        }
    });

    $("#go-up").click(function (e) {
        e.preventDefault();

        $("html, body").stop(true).animate({
            scrollTop: 0
        }, "swing")
    });

    //Ver perfil en participantes:
    $("span.circulo").hover(function () {
        // over
        $(this).css({
            "background-color": "#1f1f1f",
            "opacity" : "0.5"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#D9D9D9"
        }).ap
    })

    //Iniciar sesión en participantes:
    $("a#iniciar").hover(function () {
        // over
        $(this).css({
            "background-color": "#14570b"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#3B9E2D"
        }).ap
    })

    //Menú lateral
    $("ul > a > li").hover(function () {
        // over
        $(this).css({
            "background-color": "#14570b"
        })
    }, function () {
        // out
        $(this).css({
            "background-color": "#787575"
        })
    })

    //RRSS Footer:
    $("i.fa-instagram").hover(function () {
        // over
        $(this).css({
            "color": "pink"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })

    $("i.fa-facebook").hover(function () {
        // over
        $(this).css({
            "color": "blue"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })

    $("i.fa-whatsapp").hover(function () {
        // over
        $(this).css({
            "color": "green"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })

    $("i.fa-twitter").hover(function () {
        // over
        $(this).css({
            "color": "lightblue"
        })
    }, function () {
        // out
        $(this).css({
            "color": "white"
        })
    })
});

/* Cambio de página a participantes.html al pulsar en un evento en concreto*/
function eventos() {
    document.location.href = "../src/participantes.html";
}

/* Alert al darle a iniciar sesión*/
function iniciarSesion(e) {
    alert("INICIO DE SESIÓN")
    e.preventDefault()
}

/* COOKIES */
function checkacceptCookies() {
    if (localStorage.acceptCookies == 'true') {
        $('#div-cookies').show(); // <---------------------------------- Quitar esta línea. La dejo para que María José vea las cookies.
    } else {
        $('#div-cookies').show();
    }
}
function acceptCookies() {
    localStorage.acceptCookies = 'true';
    $('#div-cookies').hide();
}
$(document).ready(function () {
    checkacceptCookies();
});

//REPRODUCTOR:
window.onload = function () {
    var video = document.getElementById('reproductor');
    var tiempoTotal = document.getElementById('total');
    var tiempoTrans = document.getElementById('trans');
    var play = document.getElementById('play');
    var stop = document.getElementById('stop');
    var restart = document.getElementById('restart');
    var mute = document.getElementById('mute');
    var subirVol = document.getElementById('subirVol');
    var bajarVol = document.getElementById('bajarVol');
    var masVel = document.getElementById('aumentarVel');
    var menosVel = document.getElementById('disminuirVel');
    var saltar = document.getElementById('saltoAdelante');
    var retroceder = document.getElementById('saltoAtras');
    var barraTiempo = document.getElementById('barraTiempo');
    var pantalla = document.getElementById('screen');
  
    video.addEventListener('volumechange', function () {
      volumenVideo = video.volume;
    });
  
    barraTiempo.max = video.duration;
    barraTiempo.value = 0;
    if (video.duration > 60) {
      tiempoTotal.innerHTML = parseInt(video.duration / 60) + ":" + parseInt(video.duration % 60);
    } else {
      if(isNaN(video.duration)){
        tiempoTotal.innerHTML = "0:33";
      }else{
        tiempoTotal.innerHTML = "0:" + parseInt(video.duration);
      }    
    }
  
    video.addEventListener('timeupdate', function () {
      barraTiempo.value = this.currentTime;
      var minutos;
      var segundos;
      if (video.currentTime >= 60) {
        minutos = parseInt(video.currentTime / 60);
        segundos = parseInt(video.currentTime % 60);
      } else {
        segundos = parseInt(video.currentTime);
        minutos = 0;
      }
      if ((segundos / 10) >= 1) {
        tiempoTrans.innerHTML = minutos + ":" + segundos;
      } else {
        tiempoTrans.innerHTML = minutos + ":0" + segundos;
      }
    });
  
    play.addEventListener('click', function () {
      if (play.value == '0') {
        video.play();
        play.value = '1';
        play.firstChild.src = "../images/pause.svg";
      } else {
        video.pause();
        play.value = '0';
        play.firstChild.src = "../images/play.svg";
      }
    })
  
    stop.addEventListener('click', function () {
      video.pause();
      video.currentTime = 0;
      play.value = '0';
      play.firstChild.src = "../images/play.svg";
    })
  
    restart.addEventListener('click', function () {
      video.currentTime = 0;
    });
  
    mute.addEventListener('click', function () {
      if (video.volume < 0.1) {
        video.volume = 0.5;
        document.getElementById('altavoz').src = "../images/altavoz.svg";
      } else {
        video.volume = 0;
        document.getElementById('altavoz').src = "../images/mute.svg";
      }
    })
  
    subirVol.addEventListener('click', function () {
      if (video.volume < 1.0) {
        video.volume += 0.1;
      }
      document.getElementById('altavoz').src = "../images/altavoz.svg";
      volumenVideo = video.volume;
    });
  
    bajarVol.addEventListener('click', function () {
      if (video.volume > 0.1) {
        video.volume -= 0.1;
      } else {
        document.getElementById('altavoz').src = "../images/mute.svg";
      }
      volumenVideo = video.volume;
    });
  
    masVel.addEventListener('click', function () {
      if (video.playbackRate < 2) {
        video.playbackRate += 0.1;
      }
      document.getElementById('velocidad').innerHTML = video.playbackRate.toFixed(1);
    });
  
    menosVel.addEventListener('click', function () {
      if (video.playbackRate > 0.1) {
        video.playbackRate -= 0.1;
      }
      document.getElementById('velocidad').innerHTML = video.playbackRate.toFixed(1);
    });
  
    saltar.addEventListener('click', function () {
      if (video.currentTime < (video.duration - video.duration / 10)) {
        video.currentTime += parseInt((video.duration / 10));
      }
    });
  
    retroceder.addEventListener('click', function () {
      if (video.currentTime > (video.duration / 10)) {
        video.currentTime -= parseInt((video.duration / 10));
      }
    });
  
    barraTiempo.addEventListener('input', function () {
      video.currentTime = this.value;
      video.pause();
    });
  
    barraTiempo.addEventListener('change', function () {
      video.play();
    });
  
    pantalla.addEventListener("click", function () {
      video.requestFullscreen();
    });
  
  };
  