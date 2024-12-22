let countDown = document.querySelector("#countDown");
let resetValue = document.querySelector(".resetValue");

let startBtn = document.querySelector(".start-btn");
let resetBtn = document.querySelector(".reset-btn");
let stopBtn = document.querySelector(".stop-btn");
let timeBtn = document.querySelector(".time-btn");
let clearBtn = document.querySelector(".clear-btn");

let startTimerCount = 0;
let intervalId;

const startTimer = () => {
  intervalId = setInterval(() => {
    countDown.innerText = startTimerCount++;
  }, 1000);
};
const stopTimer = () => {
  clearInterval(intervalId);
  showStopValue();
};

const resetTimer = () => {
  startTimerCount = 0;
  countDown.innerText = startTimerCount;
  clearInterval(intervalId);
};

const showStopValue = () => {
  let timePara = document.createElement("p");
  timePara.innerText = `The stop time is ${startTimerCount - 1}`;
  resetValue.append(timePara);
};

const clearTimer = () => {
  resetValue.innerHTML = "";
};

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);
timeBtn.addEventListener("click", showStopValue);
clearBtn.addEventListener("click", clearTimer);
