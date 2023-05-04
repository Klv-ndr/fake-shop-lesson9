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
