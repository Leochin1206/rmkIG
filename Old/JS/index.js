/* NAVBAR */
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i')

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

function toggleVideo() {
    var videoContainer = document.getElementById("videoContainer");
    var meuVideo = document.getElementById("meuVideo");

    if (videoContainer.style.display === "none") {
        // Mostrar o contêiner de vídeo e reproduzir o vídeo
        videoContainer.style.display = "block";
        meuVideo.play();
    } else {
        // Ocultar o contêiner de vídeo e pausar o vídeo
        videoContainer.style.display = "none";
        meuVideo.pause();
    }
}


