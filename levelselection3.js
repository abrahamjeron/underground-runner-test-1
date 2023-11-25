//This page will be displayed after completing the second level
const level3locked = document.getElementById("level3");
const level3unlocked = document.getElementById("level3unlocked");
const arrow = document.getElementById("downarrow");
const para = document.querySelector("p")
//The level page will be unlocked by clicking of the image
level3locked.addEventListener("click",function(){
    level3unlocked.style.display='inherit';
    level3locked.style.display='none';
    para.style.display='none';
    arrow.style.display='none';
})