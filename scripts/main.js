import * as vars from "./var.js";
import paths from "./path.js";

let count = 0;
let playing = false;
const ALL = vars.default;

loadSongFunc(count);
function loadSongFunc(count) {
  ALL.albumName.textContent = paths[count].name;
}

//play or pause current song
ALL.playpause.addEventListener("click", () =>
  playing ? pauseSongFunc(ALL) : playSongFunc(ALL)
);

// play next
ALL.next.addEventListener("click", () => {
  playNextSongFunc();
});

// play prev
ALL.prev.addEventListener("click", () => {
  playPrevSongFunc();
});

// auto play next song
ALL.audio.addEventListener('ended',()=>{
  playNextSongFunc();
});

function playSongFunc({ audio, playpause }) {
  audio.play();
  playpause.src = "../images/pause.png";
  playing = true;
}

function pauseSongFunc({ audio, playpause }) {
  audio.pause();
  playpause.src = "../images/play.png";
  playing = false;
}

function playPrevSongFunc() {
  count === 0 ? (count = paths.length - 1) : (count -= 1);
  changeSongFunc(count, ALL);
}

function playNextSongFunc() {
  count === paths.length - 1 ? (count = 0) : (count += 1);
  changeSongFunc(count, ALL);
}

function changeSongFunc(count, { audio }) {
  loadSongFunc(count);
  audio.src = paths[count].path;
  playSongFunc(ALL);
}
