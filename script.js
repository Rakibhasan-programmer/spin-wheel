// extracting all names
const nameContainer = document.querySelector(".add-name-box");
const nameElements = nameContainer.querySelectorAll("p");
const namesArray = [];

nameElements.forEach((element) => {
  const text = element.textContent.trim();
  namesArray.push(text);
});

// add new element to wheeler
const addItemButton = document.getElementById("add-item-button");
const allClass = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];
let index = 0;
addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("div");
  const container = document.querySelector(".container");

  newItem.classList.add(allClass[index]);
  newItem.textContent = namesArray[index];
  container.appendChild(newItem);

  const parentDiv = document.querySelector(".add-name-box");
  const childToRemove = parentDiv.querySelector("p");
  if (childToRemove) parentDiv.removeChild(childToRemove);

  index++;
});

// spin the wheeler
const btn = document.getElementById("spin");
const container = document.getElementById("container");
let rotation = 0;
let clicks = 0;

btn.addEventListener("click", () => {
  ++clicks;
  if (clicks) {
    const randomRotation = Math.ceil(Math.random() * 3600);
    rotation += randomRotation;

    container.style.transform = `rotate(${rotation}deg)`;

    let currentSection = parseInt(Math.floor((rotation % 360) / 45));

    currentSection = 8 - currentSection;
    if (currentSection == 8) currentSection = 0;

    const selectedName = namesArray[currentSection];

    // displaying the winner
    setTimeout(() => {
      Toastify({
        text: `Winner is ${selectedName}`,
        duration: 2000,
        position: "center"
      }).showToast();
    }, 1000);
  }
});
