/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  randomize();
};

// This function pushes random suits and numbers to the card
function randomize() {
  let suits = ["diamond", "spade", "heart", "club"];
  for (const suit of suits) {
    document.querySelector(".card").classList.remove(suit);
  }

  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
}

// This randomizes a card every 10 seconds
window.setInterval(function() {
  randomize();
}, 10000);

// This button generates a new card without reloading the page
let button = document.getElementById("changeCard");

button.addEventListener("click", function() {
  randomize();
});

// Changes width of card through user input
let widthInput = document.getElementById("widthInput");

function changeWidth() {
  const newWidth = widthInput.value.trim(); // Get the input value and remove leading/trailing spaces

  if (newWidth !== "") {
    // Only add a width if it's not empty
    document.querySelector(".card").style.width = newWidth + "px";
    widthInput.value = ""; // Clear the input field
  }
}

widthInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    changeWidth();
  }
});

// Changes height of card through user input
let heightInput = document.getElementById("heightInput");

function changeHeight() {
  const newHeight = heightInput.value.trim(); // Get the input value and remove leading/trailing spaces

  if (newHeight !== "") {
    // Only add a height if it's not empty
    document.querySelector(".card").style.height = newHeight + "px";
    heightInput.value = ""; // Clear the input field
  }
}

heightInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    changeHeight();
  }
});

// This function generates card number
function generateRandomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
}

// This function generates card symbol
function generateRandomSuit() {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);

  return suit[indexSuit];
}
