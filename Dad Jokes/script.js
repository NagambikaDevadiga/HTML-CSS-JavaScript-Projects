let joke = document.querySelector(".joke");
let fetchJokeBtn = document.querySelector(".fetch-joke");

const fetchJoke = () => {
  const apiUrl = "https://icanhazdadjoke.com/";
  const response = fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      joke.innerText = data.joke;
    })
    .catch((error) => {
      joke.innerText = error;
      joke.style.color = "red";
    });
};
fetchJoke();
fetchJokeBtn.addEventListener("click", fetchJoke);
