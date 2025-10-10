let letter = document.querySelector(".letter");

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    letter.textContent = "SPC";
  } else {
    letter.textContent = e.key;
  }
});
