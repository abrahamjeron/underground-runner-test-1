const level2 = document.getElementById("level2");
const level2unlocked = document.getElementById("level2unlocked");
const downarrow = document.getElementById("downarrow");
const text = document.querySelector("p");
level2.addEventListener("click",function(){
    level2unlocked.style.display='inherit';
    level2.style.display='none';
    downarrow.style.display='none';
    text.style.display='none'
});


