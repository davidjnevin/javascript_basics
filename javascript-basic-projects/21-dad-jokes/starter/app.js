const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning javascript app",
      },
    });
    if (!response.ok) {
      throw new Error("There was an error.");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = "There was an error.";
  }
};

fetchDadJoke();
