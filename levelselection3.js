const level3locked = document.getElementById("level3");
const level3unlocked = document.getElementById("level3unlocked");
const arrow = document.getElementById("downarrow");
const para = document.querySelector("p")
level3locked.addEventListener("click",function(){
    level3unlocked.style.display='inherit';
    level3locked.style.display='none';
    para.style.display='none';
    arrow.style.display='none';
})