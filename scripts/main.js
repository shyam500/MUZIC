import * as vars from "./var.js";
import paths from './path.js';

const ALL = vars.default;
const CURRENT_SONG = paths[0];

const SONG = new Audio(CURRENT_SONG.path);
ALL.playpause.addEventListener("click", () => playsongFunc(SONG));

let playing = false;
function playsongFunc(song) {
  if (!playing) {
    song.play();
    ALL.playpause.src = "../images/pause.png";
    playing = true;
  } else {
    ALL.playpause.src = "../images/play.png";
    playing = false;
    song.pause();
  }
};

displayAlbumFunc(ALL,CURRENT_SONG);

function displayAlbumFunc({albumName},song){
  albumName.textContent = song.name;
};



// if(playing)timeFunc(ALL);

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
