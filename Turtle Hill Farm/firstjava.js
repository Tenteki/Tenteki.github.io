runClock();
setInterval("runClock()", 1000);

function runClock() {
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

document.getElementById("time").innerHTML = dateStr + " " + timeStr;
}