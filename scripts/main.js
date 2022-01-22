import * as vars from "./var.js";

const all = vars.default;

const song = new Audio("../audios/bensound-dubstep.mp3");

all.playpause.addEventListener("click", () => playsongFunc(song));

let playing = false;
function playsongFunc(song) {
  if (!playing) {
    song.play();
    all.playpause.src = "../images/pause.png";
    playing = true;
  } else {
    all.playpause.src = "../images/play.png";
    playing = false;
    song.pause();
  }
}

// if(playing)timeFunc(all);

// function timeFunc({ start, end }) {
//   const duration = song.duration;
//   let current = song.currentTime;
//   setInterval(() => {
//     console.log(current);
//     console.log(duration);
//     end.textContent = ` ${Math.trunc(duration / 60)}:${Math.floor(
//       duration % 60
//     )}min`;
//   },1000); 
// };
