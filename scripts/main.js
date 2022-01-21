import * as vars from "./var.js";

const all = vars.default;

const song = new Audio("../audios/bensound-dubstep.mp3");

all.playpause.addEventListener("click", () => playsongFunc(song));

let playing = false;
function playsongFunc(song) {
  if (!playing) {
    song.play();
    all.playpause.src = "../images/pause.png";
    timeFunc(all,song);
    playing = true;
  } else {
    all.playpause.src = "../images/play.png";
    playing = false;
    song.pause();
  } 
}

function timeFunc({ start, end },song) {
    const duration = song.duration;
    end.textContent = ` ${Math.trunc(duration/60)}:${(Math.floor(duration%60))}min`;
  console.log(start);
  console.log(end);
}
