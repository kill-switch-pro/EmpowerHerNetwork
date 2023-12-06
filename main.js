// Array of 300 messages
var messages = [
  "Message 1",
  "Message 2",
  // ... (add all 300 messages)
  "Message 300",
];

function displayRandomMessage() {
  // Get a random index from the messages array
  var randomIndex = Math.floor(Math.random() * messages.length);

  // Display the random message
  document.getElementById("messageDisplay").innerHTML = messages[randomIndex];
}

// Display a random message every 10 seconds
setInterval(displayRandomMessage, 1000);

// Initial display
displayRandomMessage();

// Uncomment the line below if you want to stop displaying messages after a certain time (e.g., 5 minutes)
// setTimeout(() => clearInterval(messageInterval), 300000); // 300,000 milliseconds = 5 minutes

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
document.body.addEventListener("load", getJoke);

btn.addEventListener("click", getJoke);
getJoke();

//make background image her picture in ASCI
