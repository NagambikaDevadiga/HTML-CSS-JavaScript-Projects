let btn = document.querySelector(".btn");
let istatus = document.querySelector(".status");

let check = 0;

btn.addEventListener("click", () => {
  if (check === 0) {
    istatus.innerHTML = "Friends";
    btn.innerHTML = "Remove Friend";
    istatus.style.color = "Green";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    btn.innerHTML = "Add Friend";
    istatus.style.color = "Red";
    check = 0;
  }
});
