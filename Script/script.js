import { Highscore } from "./Modules/menu.mjs";
import { Start } from "./Modules/play.mjs";


Highscore();

const startBtn = document.getElementById("start");

startBtn.addEventListener("click", function(){
    console.log("clicked on start");
    Start();

});