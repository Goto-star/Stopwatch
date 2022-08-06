const startBtn = document.querySelector("#btn_start");
const stopBtn = document.querySelector("#btn_stop");
const resetBtn = document.querySelector("#btn_reset");

var sec3  = 0;
var sec2  = 0;
var sec1  = 0;
var mSec = 0;

let time;

//スタートボタン
function startTimer() {
time = setInterval(function() {
mSec ++;
if (mSec == 10) {
 sec1++;
 mSec = 0;
}
if (sec1 == 10) {
 sec2++;
 sec1 = 0;
}
if (sec2 == 10) {
 sec3++;
 sec2 = 0;
}

document.getElementById('mytime').innerHTML = sec3 + ":" + sec2 + ":" + sec1 + ":" + mSec;
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





