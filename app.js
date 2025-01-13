let audio = document.querySelector("audio");

function unmute() {
  audio.muted = !audio.muted;
}

unmute();
audio.play();
