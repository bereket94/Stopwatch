const timerEl=document.getElementById("timer");
const startButtonEl=document.getElementById("start");
const stopButtonEl=document.getElementById("stop");
const resetButtonEl=document.getElementById("reset");

let startTime=0;
let elapsedTime=0;
let timerEnterval=0;
function startTimer(){
    startTime=Date.now()-elapsedTime;
    timerEnterval=setInterval(()=>{
        elapsedTime=Date.now()-startTime;
        timerEl.textContent=formatTime(elapsedTime);
    },10);
    startButtonEl.disabled =true;
    timerEl.disabled=false;
    stopButtonEl.disabled = false;
}
function formatTime(elapsedTime){
  const miliseconds=Math.floor((elapsedTime %1000)/10);
  const seconds=Math.floor((elapsedTime%(1000*60))/1000);
  const minutes=Math.floor((elapsedTime%(1000*60*60))/(1000*60));
  const huors=Math.floor(elapsedTime/(1000*60*60));
  return(
    (huors ? (huors>9 ? huors:"0"+ huors):"00")+":"+
    (minutes ? (minutes>9 ? minutes:"0"+minutes):"00")+":"+
    (seconds ?(seconds >9 ? seconds:"0" + seconds):"00")+"."+
    (miliseconds>9 ? miliseconds : "0" + miliseconds)
  );
}
function stopTimer(){
  clearInterval(timerEnterval);
  startButtonEl.disabled=false;
  stopButtonEl.disabled=true;
}
function resetTimer(){
  clearInterval(timerEnterval);
  elapsedTime=0;
  timerEl.textContent="00:00:00.00";
  startButtonEl.disabled=false;
  stopButtonEl.disabled=true;
}
startButtonEl.addEventListener("click",startTimer);
stopButtonEl.addEventListener("click",stopTimer);
resetButtonEl.addEventListener("click",resetTimer);
