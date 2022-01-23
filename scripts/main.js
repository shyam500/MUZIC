import * as vars from "./var.js";
import paths from "./path.js";

let count = 0;
let playing = false;
const ALL = vars.default;

loadSongFunc(count);
function loadSongFunc(count){
  ALL.albumName.textContent = paths[count].name;
};

//play or pause current song
ALL.playpause.addEventListener("click", () =>
  playing ? pauseSongFunc(ALL) : playSongFunc(ALL)
);

// play next
ALL.next.addEventListener("click", () => {
  playNextFunc(ALL);
});

// play prev
ALL.prev.addEventListener("click", () => {
  playPrevFunc(ALL);
});

function playSongFunc({ audio,playpause }) {
  audio.play()
  playpause.src = "../images/pause.png";
  playing = true;
};

function pauseSongFunc({ audio, playpause }) {
  audio.pause();
  playpause.src = "../images/play.png";
  playing = false;
};

function playPrevFunc({audio}) {
  audio.pause();
  playing = false;
  count === 0 ? (count = paths.length - 1) : (count -= 1);
  loadSongFunc(count);
  audio.src = paths[count].path;
  playSongFunc(ALL);
};

// function playNextFunc(song) {
//   song.pause();
//   playing = false;
//   count === paths.length - 1 ? (count = 0) : (count += 1);
//   console.log(count);
// }
