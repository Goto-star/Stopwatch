const startBtn = document.querySelector("#btn_start");
const stopBtn = document.querySelector("#btn_stop");
const resetBtn = document.querySelector("#btn_reset");

var hour  = 0;
var min  = 0;
var sec  = 0;
var mSec = 0;

let time;

//スタートボタン
function startTimer() {
time = setInterval(function() {
mSec ++;
if (mSec == 10) {
 sec++;
 mSec = 0;
}
if (sec == 60) {
 min++;
 sec = 0;
}
if (min == 60) {
 hour++;
 min = 0;
}

document.getElementById('mytime').innerHTML = hour + ":" + min + ":" + sec + ":" + mSec;
},100);

startBtn.setAttribute("disabled", true);
stopBtn.removeAttribute("disabled", false);
resetBtn.removeAttribute("disabled", false);

}

//ストップボタン
function stopTimer(){
clearInterval(time);

stopBtn.setAttribute("disabled", true);
startBtn.removeAttribute("disabled", false);

}

//リセットボタン
function resetTimer(){
document.getElementById('mytime').innerHTML = '0:0:0:0';

time = 0;

startBtn.removeAttribute("disabled", false);
stopBtn.setAttribute("disabled", true);
resetBtn.setAttribute("disabled", true);

}





