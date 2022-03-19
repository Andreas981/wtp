const startRound = async () => {
  // Fetch image
  // Fetch name
  let fullNumber = getRandomNumber();

  let gifName = fullNumber + ".gif";
  let name = pokemonList[fullNumber].name;

  playAudio();
  await delay(2500);
  showBlurredImage(gifName);

  return gifName;
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
