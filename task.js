const msgBox = document.querySelector(".msg-box");
const btns = document.querySelectorAll("button");
const cartSection = document.querySelector(".cart");
const cartNumber = document.querySelector(".cart-number");
const product = document.querySelector(".product");

console.log(msgBox);
btns.forEach((btn) => {
  console.log(btn);
});
console.log(cartSection);
console.log(cartNumber);
console.log(product);

msgBox.textContent = "Welcome To Js";
cartNumber.innerHTML = "<strong>5</strong>";
cartNumber.style.color = "green";
product.classList.toggle("sale");
