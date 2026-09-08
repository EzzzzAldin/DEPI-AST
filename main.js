// Get Elements
// const body = document.querySelector("body");
// const h1 = document.querySelector("h1");
// const div1 = document.querySelector("div");
// const div2 = document.querySelector(".d2");
// const div3 = document.querySelector("#d3");
// // const div3 = document.getElementById("d3");
// const btn1 = document.querySelector("button");
// const searchBox = document.querySelector("#search-box");
// const reslut = document.querySelector(".reslut");
// const countries = document.querySelector(".countries");
// console.log(searchBox);
// console.log(reslut);

// console.log(h1);
// console.log(div1);
// console.log(div2);
// console.log(div3);
// console.log(btn1);

// btns.forEach((index) => {
//   console.log(index);
// });

// div1.textContent = "Hello From <strong> JS </strong>";
// div2.innerHTML = "Hello From <strong>Js</strong> Part 2";

// body.classList.add("dark");
// body.classList.remove("dark");
// body.classList.toggle("dark");
// console.log(body.classList);

// div1.style.backgroundColor = "red";
// div1.style.borderStyle = "solid";
// div1.style.borderWidth = "5px";
// div1.style.borderColor = "blue ";

// btn1.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });

// searchBox.addEventListener("input", () => {
//   console.log(`searching ${searchBox.value}`);
//   reslut.innerHTML = `${searchBox.value}`;
// });

// countries.addEventListener("change", () => {
//   console.log("Input Is Changed");
// });

// GET Elements
const btnClick = document.querySelector("#clickEvent");
const msgClick = document.querySelector(".clickMsg");
const searchInput = document.querySelector("#search");
const inputMsg = document.querySelector(".inputMsg");
const countrySelect = document.querySelector("#countrySelect");
const changeMsg = document.querySelector(".changeMsg");
const keyInput = document.querySelector("#keyInput");
const keyMsg = document.querySelector(".keyMsg");
const loginBtn = document.querySelector(".loginBtn");
const loginMsg = document.querySelector(".loginMsg");
const loginForm = document.querySelector("#loginForm");
const list = document.querySelector(".list");
const newItem = document.createElement("li");
newItem.innerHTML = "Task 5";

list.append(newItem);
newItem.remove();

// Event 1
btnClick.addEventListener("click", (event) => {
  msgClick.innerHTML = "Button Is Clicked";
});

// Event 2
searchInput.addEventListener("input", (event) => {
  inputMsg.innerHTML = event.target.value;
});

// Event 3
countrySelect.addEventListener("change", (event) => {
  changeMsg.innerHTML = event.target.value;
});

// Event 4
keyInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    keyMsg.innerHTML = event.target.value;
  }
});

// Event 5
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginMsg.innerHTML = "Submit Success";
});
