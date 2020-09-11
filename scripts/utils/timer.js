var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalMiliSeconds = 0;

function setTime() {
  totalMiliSeconds = totalMiliSeconds + 10;
  let totalSeconds = parseInt(totalMiliSeconds / 1000);
  miliSeconds.innerHTML = pad(totalMiliSeconds % 1000);
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function reset() {
  totalMiliSeconds = 0;
  secondsLabel.innerHTML = "00";
  minutesLabel.innerHTML = "00";
  miliSeconds.innerHTML = "00";
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
export default {
  setTime,
  reset,
};
