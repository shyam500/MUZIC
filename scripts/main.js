import * as vars from "./var.js";
import paths from "./path.js";

let count = 0;
let playing = false;
const ALL = vars.default;

loadSongFunc(count);
function loadSongFunc(count) {
  ALL.albumName.textContent = paths[count].name;
  ALL.range.value = 0;
};

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
ALL.audio.addEventListener("ended", () => {
  playNextSongFunc();
});

// display currenttime and duration
ALL.audio.addEventListener("timeupdate", (e) => {
  ALL.start.textContent = timeGenFunc(e.target.currentTime, "/");
  ALL.end.textContent = timeGenFunc(e.target.duration, "%");
  rangeValueChangeFunc(e.target.currentTime, e.target.duration);
});

ALL.range.addEventListener("click", (e) => {
  ALL.audio.currentTime = (ALL.audio.duration / 100) * e.target.value;
});

function rangeValueChangeFunc(current, duration) {
  ALL.range.value = Math.ceil((current * 100) / duration);
};

function timeGenFunc(time, op) {
  if (op === "/") {
    let cMin = Math.floor(time / 60);
    let cSec = Math.floor(time % 60);
    return `${cMin < 10 ? "0" + cMin : cMin}:${cSec < 10 ? "0" + cSec : cSec}`;
  } else if (op === "%") {
    let dMin = Math.floor(time / 60);
    let dSec = Math.floor(time % 60);
    return `${dMin < 10 ? "0" + dMin : dMin}:${dSec < 10 ? "0" + dSec : dSec}`;
  }
};

function playSongFunc({ audio, playpause }) {
  audio.play();
  playpause.src = "../images/pause.png";
  playing = true;
};

function pauseSongFunc({ audio, playpause }) {
  audio.pause();
  playpause.src = "../images/play.png";
  playing = false;
};

function playPrevSongFunc() {
  count === 0 ? (count = paths.length - 1) : (count -= 1);
  changeSongFunc(count, ALL);
};

function playNextSongFunc() {
  count === paths.length - 1 ? (count = 0) : (count += 1);
  changeSongFunc(count, ALL);
};

function changeSongFunc(count, { audio }) {
  loadSongFunc(count);
  audio.src = paths[count].path;
  playSongFunc(ALL);
};
