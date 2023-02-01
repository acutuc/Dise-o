
window.onload=function(){
  var video = document.getElementById('reproductor');

  var tiempoTotal = document.getElementById('total');

  var tiempoTrans = document.getElementById('trans');

  var play = document.getElementById('play');

  var stop = document.getElementById('stop');

  var restart = document.getElementById('restart');

  var mute=document.getElementById('mute');

  var subirVol=document.getElementById('subirVol');

  var bajarVol=document.getElementById('bajarVol');

  var masVel= document.getElementById('aumentarVel');

  var menosVel=document.getElementById('disminuirVel');

  var saltar = document.getElementById('saltoAdelante');
  var retroceder = document.getElementById('saltoAtras');

  var barraTiempo=document.getElementById('barraTiempo');

  var pantalla=document.getElementById('screen');



  video.addEventListener('volumechange', function(){
    volumenVideo=video.volume;
  });

  barraTiempo.max=video.duration;
  barraTiempo.value=0;


  if(video.duration>60){
    tiempoTotal.innerHTML=parseInt(video.duration/60)+":"+parseInt(video.duration%60);
  }else{
    tiempoTotal.innerHTML="0:"+parseInt(video.duration);
  }


  video.addEventListener('timeupdate', function(){


      barraTiempo.value=this.currentTime;



    var minutos;
    var segundos;

    if(video.currentTime >= 60){
       minutos=parseInt(video.currentTime/60);
       segundos=parseInt(video.currentTime%60);
    }else{
       segundos=parseInt(video.currentTime);
       minutos=0;
    }

    if((segundos/10)>=1){
      tiempoTrans.innerHTML=minutos+":"+segundos;
    }else{
      tiempoTrans.innerHTML=minutos+":0"+segundos;
    }


  });


  play.addEventListener('click',function(){

    if (play.value == '0') {

        video.play();

        //play.style.background="darkred";
        play.value='1';
        play.firstChild.src="images/pause.svg";

    } else {

        video.pause();
        //play.style.background="grey";
        play.value='0';
        play.firstChild.src="images/play.svg";

    }


  })

  stop.addEventListener('click',function(){

    video.pause();

    video.currentTime = 0;

    play.value='0';
    play.firstChild.src="images/play.svg";


  })

  restart.addEventListener('click', function(){
    video.currentTime = 0;
  });


  mute.addEventListener('click', function(){
    if(video.volume<0.1){
      video.volume=0.5;
      document.getElementById('altavoz').src="images/altavoz.svg";

    }else{
      video.volume=0;
      document.getElementById('altavoz').src="images/mute.svg";
    }

  })


  subirVol.addEventListener('click', function(){

    if(video.volume<1.0){
      video.volume+=0.1;
    }
    document.getElementById('altavoz').src="images/altavoz.svg";
    volumenVideo=video.volume;

  });

  bajarVol.addEventListener('click', function(){

    //console.log(video.volume);
    if(video.volume>0.1){
      video.volume-=0.1;
    }else{
      document.getElementById('altavoz').src="images/mute.svg";

    }
    volumenVideo=video.volume;
  });

  masVel.addEventListener('click', function(){

    if(video.playbackRate<2){
      video.playbackRate+=0.1;
    }

    document.getElementById('velocidad').innerHTML=video.playbackRate.toFixed(1);


  });

  menosVel.addEventListener('click', function(){


    if(video.playbackRate>0.1){
      video.playbackRate-=0.1;
    }

    document.getElementById('velocidad').innerHTML=video.playbackRate.toFixed(1);
  });


saltar.addEventListener('click', function(){

  if(video.currentTime<(video.duration-video.duration/10)){

    video.currentTime+=parseInt((video.duration/10));

  }
});

retroceder.addEventListener('click', function(){

  if(video.currentTime>(video.duration/10)){

    video.currentTime-=parseInt((video.duration/10));

  }
});

barraTiempo.addEventListener('input', function(){

  video.currentTime=this.value;
  video.pause();
  //var volumen=video.volume;
  //video.volume=0;

});

barraTiempo.addEventListener('change', function(){

  video.play();

});

pantalla.addEventListener("click", function() {

  video.requestFullscreen();


});



};
