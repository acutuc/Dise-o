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
    tiempoTotal.innerHTML = "0:" + audio.duration;
  }

  /*
  contenido.addEventListener("click", () => {
    if (play.innerHTML == 'PLAY') {
      play.style.background = "#787575";
      play.innerHTML = 'PAUSE';
    } else {
      play.style.background = "#3B9E2D";
      play.innerHTML = 'PLAY';
    }
  })
*/

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
    if (play.innerHTML == 'PLAY') {
      audio.play();
      play.style.background = "#787575";
      play.innerHTML = 'PAUSE';
    } else {
      audio.pause();
      play.style.background = "#3B9E2D";
      play.innerHTML = 'PLAY';
    }
  })

  stop.addEventListener('click', () => {
    audio.pause();    //Paramos la reproducción
    audio.currentTime = 0    //La llevamos al inicio
    play.innerHTML = 'PLAY'    //Establecemos de nuevo el botón Play a su estado inicial
  })

  restart.addEventListener('click', () => {
    audio.currentTime = 0;    //Mandamos la reproducción al principio pero NO la paramos
  })

  loop.addEventListener('click', () => {
    if (audio.loop == false) {
      audio.loop = true;
      this.style.background = '#787575';
    } else {
      audio.loop = false;
      this.style.background = '#3B9E2D';
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
