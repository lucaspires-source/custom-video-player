
//seleciona os arquivos html
const video = document.querySelector('.video');
const juice = document.querySelector('.pink-juice');
const btn = document.getElementById('play-pause');

//controla o play e o pause
const togglePlayPause = () => {
    if(video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}
//escuta o botão
btn.onclick =  () => {
    togglePlayPause();
}
video.onclick = () =>{
    togglePlayPause
}

//controla a barra de progresso
video.addEventListener('timeupdate', () => {
    const juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended) {
        btn.className = "play";
      //Vai resetar o playback.
        video.currentTime = 0;
        togglePlayPause();
    }
});
