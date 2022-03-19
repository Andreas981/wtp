let roundStarted = false;
let currentName = "";

const startRound = async () => {
  if (roundStarted) return;
  roundStarted = true;
  let fullNumber = getRandomNumber();

  currentNumber = fullNumber;

  let gifName = fullNumber + ".gif";
  let name = pokemonList[fullNumber].name;
  currentName = name;

  console.log(name);

  playAudio();
  showTitleImage();
  await delay(2500);
  showBlurredImage(gifName);
};

const checkName = async (name) => {
  let correctName = name.toLowerCase().replaceAll(/\s/g, "");
  if (correctName === currentName) {
    document.getElementById("pokemon-image").className = "";
    await delay(4000);
    stopRound();
  }
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function showBlurredImage(gifName) {
  let blurredImage = document.createElement("img");
  blurredImage.src = "./assets/" + gifName;
  blurredImage.className = "blurred";
  blurredImage.id = "pokemon-image";

  let parentElement = document.getElementById("pokemon-holder");
  parentElement.appendChild(blurredImage);
}

function stopRound() {
  document.getElementById("pokemon-image").remove();
  hideTitleImage();
  currentName = "";
  roundStarted = false;
}

function showTitleImage() {
  document.getElementById("title-text").style = "display: block;";
}

function hideTitleImage() {
  document.getElementById("title-text").style = "display: none;";
}

function playAudio() {
  document.getElementById("who-that-pokemon-audio").play();
}

function getRandomNumber() {
  let randNumber = Math.floor(Math.random() * 151) + 1;
  var amountOfZeros = getAmoutOfZeros(randNumber);
  return amountOfZeros + randNumber;
}

function getAmoutOfZeros(number) {
  if (number < 10) {
    return "00";
  } else if (number >= 10 && number < 100) {
    return "0";
  } else {
    return "";
  }
}
