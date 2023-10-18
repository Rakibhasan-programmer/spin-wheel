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
function addItem (e) {
  const newItem = document.createElement("div");
  const container = document.querySelector(".container");

  newItem.classList.add(allClass[index]);
  newItem.textContent = e.innerText;
  container.appendChild(newItem);

  const parentDiv = document.querySelector(".add-name-box");
  const childToRemove = e;
  if (childToRemove) parentDiv.removeChild(childToRemove);

  index++;
};

// spin the wheeler
const btn = document.getElementById("spin");
const container = document.getElementById("container");
let rotation = 0;
let clicks = 0;

btn.addEventListener("click", () => {
  const namesArray = generatingArrayOfNames();

  if(namesArray.length < 8){
    return Toastify({
      text: `You have to select all the names in the list.`,
      duration: 2000,
      position: "center",
    }).showToast();
  }

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
        position: "center",
      }).showToast();
    }, 1000);
  }
});


// extracting all names
const generatingArrayOfNames = () => {
  const nameContainer = document.querySelector(".container");
  const nameElements = nameContainer.querySelectorAll("div");
  const namesArray = [];

  nameElements.forEach((element) => {
    const text = element.textContent.trim();
    namesArray.push(text);
    console.log("hit");
  });

  return namesArray;
};
