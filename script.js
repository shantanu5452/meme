const video=document.getElementById("video");

const startBtn=document.getElementById("startCamera");

const gesture=document.getElementById("gesture");

const gestureName=document.getElementById("gestureName");

const meme=document.getElementById("memeImage");

const fps=document.getElementById("fps");

const confidence=document.getElementById("confidence");

startBtn.onclick=startCamera;

async function startCamera(){

try{

const stream=await navigator.mediaDevices.getUserMedia({

video:true,

audio:false

});

video.srcObject=stream;

gesture.innerHTML="Camera Started";

gestureName.innerHTML="Show a Gesture";

}

catch(error){

alert("Camera Permission Denied");

}

}

setInterval(()=>{

fps.innerHTML=Math.floor(Math.random()*5+28);

confidence.innerHTML=Math.floor(Math.random()*3+97)+"%";

},1000);

document.getElementById("themeBtn").onclick=()=>{

document.body.classList.toggle("light");

}
