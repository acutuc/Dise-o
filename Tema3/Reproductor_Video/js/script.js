window.onload = () =>{
    let play = document.getElementById("play");

    play.addEventListener("click", () => {
        play.pause();
    });
}