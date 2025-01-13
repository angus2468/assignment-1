let audio = document.querySelector("audio");
let everything = document.querySelector("body");
function unmute() {
  audio.muted = !audio.muted;
}
unmute();
everything.onmouseover = play();
