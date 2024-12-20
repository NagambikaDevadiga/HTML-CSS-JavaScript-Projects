let timer = document.querySelector("#timer");


setInterval(() => {
  timeNow = new Date();

  timer.innerText=timeNow.toLocaleTimeString()

}, 1000);
