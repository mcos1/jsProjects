setInterval(clock, 1000);

function clock() {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const ampm = document.getElementById("ampm");
  const currentDate = new Date();
  hour.innerHTML = currentDate.getHours();
  minute.innerHTML = currentDate.getMinutes();
  second.innerHTML = currentDate.getSeconds();

  if (second.innerHTML < 10) {
    second.innerHTML = 0 + second.innerHTML;
  }

  if (minute.innerHTML < 10) {
    minute.innerHTML = 0 + minute.innerHTML;
  }

  if (hour.innerHTML > 12) {
    hour.innerHTML = hour.innerHTML - 12;
    ampm.innerHTML = "PM";
    hour.innerHTML = 0 + hour.innerHTML;
  } else {
    ampm.innerHTML = "AM";
    ampm.classList.remove("pm");
    ampm.classList.add("am");
  }
}
