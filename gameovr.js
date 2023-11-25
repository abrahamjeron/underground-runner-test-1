// functioning the game over page
var scorecard = document.getElementById("scorecard");
// getting the player's score from the local storage
var n = localStorage.getItem("score");
scorecard.innerText =`your score: ${n}`;

var gameovr = document.getElementById("gameover");
gameovr.innerText=`you lose`;
// functioning the enter key 
window.addEventListener("keydown",function(event){
    switch (event.key){
        case "Enter":
            location.href="./level1.html";
    }
})