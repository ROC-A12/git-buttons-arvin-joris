const motds = [
  "Foul Tarnish!",
  "It's me, Mario",
  "Friday the 13!",
  "it's all Ogre now",
  "More than 999 sold!",
  "Yaru?",
  "i used to be an andevterur like you. until i took an arrow to the knee",
  "cest la vie",
];

const getRandomInt = function (min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const showRandomMessage = function () {
  const messageContainer = document.querySelector("#myMessage");

  const currentMessage = messageContainer.innerText;
  const filteredMessages = motds.filter((motd) => motd !== currentMessage);
  const randomIndex = getRandomInt(0, filteredMessages.length);

  messageContainer.innerText = filteredMessages[randomIndex];
};

const addButtonClickEvent = function () {
  const buttonElement = document.querySelector("#myButton");

  buttonElement.addEventListener("click", showRandomMessage);
};

document.addEventListener("DOMContentLoaded", addButtonClickEvent);
document.addEventListener("DOMContentLoaded", showRandomMessage);
