let password = "";

function addNumber(num){

if(password.length<4){

password+=num;

updateDots();

}

}

function removeNumber(){

password=password.slice(0,-1);

updateDots();

}

function updateDots(){

let dots="";

for(let i=0;i<password.length;i++){

dots+="● ";

}

for(let i=password.length;i<4;i++){

dots+="○ ";

}

document.getElementById("display").innerHTML=dots;

}

function checkPassword(){

if(password=="1234"){

window.location.href = "html/welcome.html";

}

else{

document.getElementById("msg").innerHTML="❌ Wrong Passcode";

password="";

updateDots();

}

}
setInterval(function(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},8000);

},700);
function openLetter(){

document.getElementById("letter").style.display="block";

}
function openGift(){

document.getElementById("giftMessage").style.display="block";

}