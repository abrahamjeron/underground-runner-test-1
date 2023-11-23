var scorecard = document.getElementById("scorecard");
var n = localStorage.getItem("score");
scorecard.innerText =`your score: ${n}`;
var nickname = localStorage.getItem('nickname');
var gameovr = document.getElementById("gameover");
gameovr.innerText=`you lose ${nickname}`;

window.addEventListener("keydown",function(event){
    switch (event.key){
        case "Enter":
            location.href="./level1.html";
    }
})