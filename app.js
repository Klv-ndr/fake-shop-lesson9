"use strict";

// add to cart

let productsCountEL = document.getElementById("products-count");
console.log(productsCountEL);

let addToCartBtns = document.querySelectorAll(".cart");
console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     productsCountEL.textContent = +productsCountEL.textContent + 1;
//   });
// }

addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCountEL.textContent = +productsCountEL.textContent + 1;
  });
});

// change like state

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

//more details

let moreDetailsBtns = document.querySelectorAll(".details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// slick
$(".slider").slick({
  dots: true,
});
