// let secondsTitle = document.querySelector("#secondsTitle");

// let minute = 0;
// let seconds = 0;
// let soat = 0;

// const interval = setInterval(() => {
//   seconds += 1;

//   secondsTitle.textContent = `${minute < 10 ? `${minute}` : minute} : ${
//     seconds < 10 ? `0${seconds}` : seconds
//   }`;

//   if (seconds == 59) {
//     seconds = 0;
//     minute += 1;
//   }
// }, 1000);

let timer;
let minutesInput = parseInt(prompt("Vaqt kiriting:"));
let minutes = minutesInput;
let seconds = 0;

const startBtn = document.getElementById("Boshlash");
const pauseBtn = document.getElementById("Pauza");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
}

function pauseTimer() {
  clearInterval(timer);
  startBtn.disabled = false;
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      alert("Vaqt tugadi!");
      startBtn.disabled = false;
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  minutesDisplay.textContent = padTime(minutes);
  secondsDisplay.textContent = padTime(seconds);
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
