"use strict";
let latin = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
let krill = "абcдефгҳижклмнопқрстувхйзАБCДEФГҲИЖКЛМНОПҚРСТУВХЙЗ";
let latinArr = latin.split("");
let krillArr = krill.split("");
document
  .querySelector(".tw-menu-btn-image")
  .addEventListener("click", function () {
    let x = document.querySelector(".section-1_h2").textContent;
    let y = document.querySelector(".section-2_h2").textContent;
    [x, y] = [y, x];
    document.querySelector(".section-1_h2").textContent = x;
    document.querySelector(".section-2_h2").textContent = y;
    document.querySelector(".textArea-2").value = "";
    document.querySelector(".textArea-1").value = "";
  });

let swap = function (str) {
  str = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (document.querySelector(".section-1_h2").textContent == "Latin") {
      if (latinArr.includes(str[i])) {
        arr.push(krillArr[latinArr.indexOf(str[i])]);
      } else {
        arr.push(str[i]);
      }
    } else if (
      document.querySelector(".section-1_h2").textContent == "Kirill"
    ) {
      if (krillArr.includes(str[i])) {
        arr.push(latinArr[krillArr.indexOf(str[i])]);
      } else {
        arr.push(str[i]);
      }
    }
  }
  return arr.join("");
};

setInterval(function () {
  let a = document.querySelector(".textArea-1").value;
  document.querySelector(".textArea-2").value = swap(a);
}, 100);
