export function Highscore(){
    const scoreBtn = document.getElementById("highscore");
    const quitBtn = document.getElementById("quit");
    const startBtn = document.getElementById("start")
    const menuBox = document.getElementById("menu");
    const scoreBox = document.getElementById("scoreBox");

    scoreBtn.addEventListener("click", function(){
        console.log("hidden");
        menuBox.style.visibility = "hidden";
        scoreBox.style.visibility = "visible"
    });



    const backBtn = document.getElementById("scoreBox");

    backBtn.addEventListener("click", function(){
        menuBox.style.visibility = "visible";
        scoreBox.style.visibility = "hidden"
    });

    quitBtn.addEventListener("click", function(){
        window.close();
    });
}