import * as vars from "./var.js";

const all = vars.default;

const song = new Audio("../audios/bensound-dubstep.mp3");

all.playpause.addEventListener("click", () => playsongFunc(song));

function playsongFunc(song){
    song.play()
    console.log(song.duration/60);
    console.log(song.currentTime);
};

 