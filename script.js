const btn = document.getElementById("spin");
let rotation = Math.ceil(Math.random() * 1000);
let arrow = 75;

// extracting all names
const nameContainer = document.querySelector(".add-name-box");
const nameElements = nameContainer.querySelectorAll("p");
const namesArray = [];

nameElements.forEach((element) => {
  const text = element.textContent.trim();
  namesArray.push(text);
});

// spin the wheeler
let clicks = 0;
btn.addEventListener("click", () => {
  ++clicks;
  if (clicks > 0) {
    document.getElementById(
      "container"
    ).style.transform = `rotate(${rotation}deg)`;
    rotation += Math.ceil(Math.random() * 1000);

    // selectedName();
  }
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

  index++;
});
