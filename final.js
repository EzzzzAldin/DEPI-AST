// Get Elements
const colorInput = document.querySelector("#colorInput");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const colorsList = document.querySelector(".colors");
const arrColors = ["Red", "Blue", "Green"];

// Task 1 Show Colors In Color List
const updateArr = () => {
  colorsList.innerHTML = "";

  arrColors.forEach((color) => {
    colorsList.innerHTML += `<p>${color}</p>`;
  });
};

updateArr();

// Task 2 remove Last Item
removeBtn.addEventListener("click", (event) => {
  arrColors.pop();
  console.log(arrColors);
  updateArr();
});

// Task 3 Add Colors
addBtn.addEventListener("click", (event) => {
  arrColors.push(colorInput.value);
  updateArr();
  colorInput.value = "";
});

// Task 4 Add Colors
colorInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    arrColors.push(colorInput.value);
    updateArr();
    colorInput.value = "";
  }
});
