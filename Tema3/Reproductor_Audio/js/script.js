window.onload = () => {
  let audio = document.getElementById('reproductor');
  let tiempoTotal = document.getElementById('total');
  let tiempoTrans = document.getElementById('trans');
  let play = document.getElementById('play');
  let stop = document.getElementById('stop');
  let restart = document.getElementById('restart');
  let loop = document.getElementById('loop');
  let subirVol = document.getElementById('subirVol');
  let bajarVol = document.getElementById('bajarVol');
  //let contenido = document.getElementById("contenido");



  if (audio.duration > 60) {
    tiempoTotal.innerHTML = parseInt(audio.duration / 60) + ":" + parseInt(audio.duration % 60);
  } else {
    if(isNaN(audio.duration)){
      tiempoTotal.innerHTML ="6:30";
    }else{
      tiempoTotal.innerHTML = "0:" + audio.duration;
    }
    
  }

  audio.addEventListener('timeupdate', () => {
    var minutos;
    var segundos;
    if (audio.currentTime >= 60) {
      minutos = parseInt(audio.currentTime / 60);
      segundos = parseInt(audio.currentTime % 60);
    } else {
      segundos = parseInt(audio.currentTime);
      minutos = 0;
    }
    if ((segundos / 10) >= 1) {
      tiempoTrans.innerHTML = minutos + ":" + segundos;
    } else {
      tiempoTrans.innerHTML = minutos + ":0" + segundos;
    }
  });


  play.addEventListener('click', () => {
    if (document.getElementById("play").src = "images/pause.svg") {
      audio.pause();
      document.getElementById("play").src = "images/play.svg";
    }else{
      audio.play();
      document.getElementById("play").src = "images/pause.svg";
    }
  })

  stop.addEventListener('click', () => {
    audio.pause();    //Paramos la reproducción
    audio.currentTime = 0    //La llevamos al inicio
    document.getElementById("play").src = "images/play.svg";    //Establecemos de nuevo el botón Play a su estado inicial
  })

  restart.addEventListener('click', () => {
    audio.currentTime = 0;    //Mandamos la reproducción al principio pero NO la paramos
  })

  loop.addEventListener('click', () => {
    if (audio.loop == false) {
      audio.loop = true;
      document.getElementById("loop").src="images/loop.svg"
    } else {
      audio.loop = false;
      document.getElementById("loop").src="images/exit-loop.svg"
    }
  })

  subirVol.addEventListener('click', () => {
    if (audio.volume < 1.0) {
      audio.volume += 0.1;
      console.log(audio.volume)
    }
    document.getElementById('altavoz').src = "images/altavoz.svg";
  });

  bajarVol.addEventListener('click', () => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
      console.log(audio.volume)
    } else if (audio.volume < 0.1) {
      document.getElementById('altavoz').src = "images/mute.svg";
    } else {
      document.getElementById('altavoz').src = "images/mute.svg";
    }
  });


}
