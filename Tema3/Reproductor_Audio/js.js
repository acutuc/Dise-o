function iniciar() {
    var reproducir = document.getElementById('reproducir');
    reproducir.addEventListener('click', presionar);
}
function presionar() {
    var audio = document.getElementById('audio');
    audio.play();
}
window.addEventListener('load', iniciar); 