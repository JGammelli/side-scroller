export function Start(){
    
    let player = document.getElementById("player");
    let counter = 0;
    let bottom = 0;
    let right = 0;
    let left = 0;
    
    let enemy = document.getElementById("enemy");
    let moveRight = 0;
    
    let timeBox = document.getElementById("time");
    
    function startGame(){
        let lifeTime = 201;
    
        setInterval(function(){
            //console.log(lifeTime);
            lifeTime --;
            timeBox.innerHTML = "<p>" + "Time: " + lifeTime + "</p>";
        }, 1000); 
    
        console.log("hello!");
    }
    startGame();

    
    // function enemyMove(){
    //     lifeTime = 0;
    //     let timer = setInterval(function(){
    //             counter++;
    //             moveRight += 10;
    //             enemy.style.left = moveRight + "px";
    //             if (counter == 10){
    //                 clearInterval(timer)
    //                 let timerDown = setInterval(function(){
    //                     if(moveRight == 0) {clearInterval(timerDown)}
    //                     moveRight -= 10;
    //                     enemy.style.left = moveRight + "px";
    //                 }, 50);
    //             counter = 0;                
    //             }
    //     }, 50); 
    // }
    
    function jump(){
        if(player.classList != "jump"){
            player.classList.add("jump");

            setTimeout(() => {
                player.classList.remove("jump");
            }, 300);
        }
    }


    
    function walkLeft(){
        right -= 5;
        player.style.left = right + "px";
    }
    
    function walkRight(){
        right += 5;
        player.style.left = right + "px";  
    }
    
    document.addEventListener("keydown", function(evt){
        switch(evt.key){
            // case "ArrowUp":
            //     player.classList.add("keyUp");
            //     player.classList.remove("keyDown");
            //     player.classList.remove("keyRight");
            //     player.classList.remove("keyLeft");
            //     goUp();
            // break;
    
            case "ArrowDown":
                player.classList.remove("keyUp");
                player.classList.add("keyDown");
                player.classList.remove("keyRight");
                player.classList.remove("keyLeft");
            break;
    
            case "ArrowRight":
                player.classList.remove("keyUp");
                player.classList.remove("keyDown");
                player.classList.add("keyRight");
                player.classList.remove("keyLeft");
                walkRight();
            break;
    
            case "ArrowLeft":
                player.classList.remove("keyUp");
                player.classList.remove("keyDown");
                player.classList.remove("keyRight");
                player.classList.add("keyLeft");
                walkLeft();
            break;


        }
        if(evt.keyCode === 32){
            jump();
        }
        
    });





    let isAlive = setInterval(function(){
        // get player y position
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        //console.log(playerTop);

        // get enemy x position 
        let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
        //console.log(enemyLeft);


        //detect collisioon
        if(enemyLeft < 50 && enemyLeft > 0 && playerTop >= 550){
            alert("Game over!")
        }

    }, 10);
}