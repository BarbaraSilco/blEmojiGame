const blObjects = {
    "🍒🪄✨": "Cherry Magic",
    "👨🏻‍🍳🍳👨🏻‍⚕️": "Cooking Crush",
    "🪓👹🪦": "Dead Friend Forever",
    "🌻🌄🐠": "Last Twilight",
    "🏁🏎️🍼": "Pit Babe",
    "🐍🪼🦅🔫": "The Sign",
    "😁🏐😠": "Twins",
    "🔮💫⌚": "Be my Favorite",
    "⏳🔁🩷": "Viceversa",
    "🌕🐔": "Moonlight Chicken",
    "🐹🏫🦁": "My School President",
    "💖📝💑🏻": "Lovely Writer",
    "🥊💥☢️🍰": "Love Syndrome",
    "🌌⛰️📕": "A Tale of a Thousand Stars",
    "🌙👨🏻‍❤️‍👨🏻🌙": "Two Moons",
    "🎸⚽🎼1️⃣2️⃣": "Together",
    "😈👾👶🏻": "A boss and a Babe",
    "🙃🚪🙂": "Bad Buddy",
    "🐉❤️‍🔥🐅": "Big Dragon",
    "🏊🏻‍♂️🥦💦": "Between Us",
    "🥧🥁💗": "Cutie Pie",
    "💙💋": "Dark Blue Kiss",
    "🧸🎀✨": "The Miracle of Teddy Bear",
    "👥🏍️💥🔫": "Not Me",
    "⚙️🥛🍓": "Sotus",
    "🚑🥀🔄❤️‍🩹": "Triage",
    "🌔🏫☀️": "The Eclipse",
    "🌧️💕⛅": "Love in the Air",
    "❤️🤒💊": "Love Sick",
    "🙅‍♂️🏳️‍🌈👊💢🧊": "Tharntype",
    "🧜🏻‍♀️🍸❤️‍🔥🔫": "Kinnporsche",
    "👨🏻‍🏫🥀👊💥": "I will knock you",
    "🐟☁️🦷🥼": "Fish Upon the Sky",
    "👻🏳️‍🌈🪦": "He is Coming to Me",
    "👨🏻‍🏫⚽💯🍃": "Dangerous Romance",
    "🌧️☔👂🏼": "La Pluie",
    "😵🕵🏽🛌🏼🧑🏽‍⚕️": "Manner of Death",
    
};

const container = document.querySelector(".container");
const controls = document.querySelector(".controls-container");
const startButton = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInputSection = document.getElementById("userInputSection");
const resultText = document.getElementById("result");
const hints = Object.keys(blObjects);
let randomHint = "",
  randomWord = "";
let winCount = 0,
  lossCount = 5;

const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

//Blocker

const blocker = () => {
  let letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach(button => {
    button.disabled = true; 
  });

  stopGame()
};


//Start game

startButton.addEventListener("click", () => {

  //Controls and buttons visibility

  controls.classList.add("hide");
  init();
});

//Stop Game

const stopGame = () => {
  controls.classList.remove("hide");
};

//Generate Word

const generateWord = () => {
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";
  randomHint = hints[generateRandomValue(hints)];
  randomWord = blObjects[randomHint];
  container.innerHTML = `<div id="BLHint">${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {

    if (value == " ") {
      winCount += 1;
      displayItem += `<span class="inputSpace">&nbsp;</span>`;
          }

else {
            displayItem += `<span class="inputSpace">_</span>`;
          }
        });

        userInputSection.innerHTML = displayItem;
    };

    //Initial Function

    const init = () => {
      winCount = 0;
      lossCount = 5;
      document.getElementById("chanceCount").innerHTML = `<span>Tries Left:</span>${lossCount}`;
      randomHint = null;
      randomWord = "";
      userInputSection.innerHTML = "";
      letterContainer.classList.add("hide");
      letterContainer.innerHTML = "";
      generateWord();
      for(let i = 65; i < 91; i++) {let button = document.createElement("button");
      button.classList.add("letters");

      //Number to ASCII

      button.innerText = String.fromCharCode(i);

      //Character button click

      button.addEventListener("click", () => {
        let charArray = randomWord.toUpperCase().split("");

        let inputSpace = document.getElementsByClassName("inputSpace");
        if (charArray.includes(button.innerText)) {
          charArray.forEach((char, index) => {
            if (char === button.innerText) { 
              button.classList.add("used");
              inputSpace[index].innerText = char;
              winCount += 1;
              if(winCount == charArray.length){
                setTimeout(() => {
                  result.innerHTML = "You Win";
                blocker();
                }, 3000);
              }
            }
          });
        } else {

          lossCount -= 1;
          document.getElementById(
            "chanceCount"
            ).innerHTML = `<span>Tries Left:</span> ${lossCount}`;
            button.classList.add("used");
            if (lossCount == 0) {
              resultText.innerHTML = "Game Over";
              blocker ();
            }
        }

        button.disabled = true;

      });

      letterContainer.appendChild(button);

      }
      };

      window.onload = () => {
        init();
      }
