// Get Elements
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const div1 = document.querySelector("div");
const div2 = document.querySelector(".d2");
const div3 = document.querySelector("#d3");
// const div3 = document.getElementById("d3");
const btn1 = document.querySelector("button");
const searchBox = document.querySelector("#search-box");
const reslut = document.querySelector(".reslut");
const countries = document.querySelector(".countries");
// console.log(searchBox);
console.log(reslut);

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

btn1.addEventListener("click", () => {
  body.classList.toggle("dark");
});

searchBox.addEventListener("input", () => {
  console.log(`searching ${searchBox.value}`);
  reslut.innerHTML = `${searchBox.value}`;
});

countries.addEventListener("change", () => {
  console.log("Input Is Changed");
});
