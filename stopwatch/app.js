const clock = document.getElementsByClassName("clock");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const outputTenths = document.getElementById("tenths");
const outputSeconds = document.getElementById("seconds");

let seconds = 00;
let tenths = 00;
let interval;

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  tenths = "00";
  seconds = "00";
  outputTenths.innerHTML = tenths;
  outputSeconds.innerHTML = seconds;
});

function startTime() {
  tenths++;
  if (tenths <= 9) {
    outputTenths.innerHTML = "0" + tenths;
  }

  if (tenths > 9) {
    outputTenths.innerHTML = tenths;
  }

  if (tenths > 99) {
    seconds++;
    outputSeconds.innerHTML = "0" + seconds;
    tenths = 0;
    outputTenths.innerHTML = "0" + tenths;
  }

  if (seconds < 9) {
    outputSeconds.innerHTML = seconds;
  }

  if (seconds > 9) {
    outputSeconds.innerHTML = seconds - "0"
  }
}


