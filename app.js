"use strict";
const container = document.querySelectorAll(".container");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
let me = 0;

btnRight.addEventListener("click", function () {
  me += 1;
  //console.log(me);
  container[me].classList.remove("hidden");
});
btnLeft.addEventListener("click", function () {
  me = me - 1;
  console.log(me);

  container[`${me}`].classList.remove("hidden");
});
