/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "j"];
  const suit = ["♦", "♥", "♠", "♣"];

  let randNumber = Math.floor(Math.random() * number.length);
  let randSuit = Math.floor(Math.random() * suit.length);

  let numbs = document.getElementById("numb");
  numbs.innerHTML = number[randNumber];

  let randomSuitTop = document.getElementById("topSuit");
  randomSuitTop.innerHTML = suit[randSuit];

  if (suit[randSuit] === "♠" || suit[randSuit] == "♣") {
    randomSuitTop.style.color = "black";
  } else {
    randomSuitTop.style.color == "red";
  }

  let randomSuitBottom = document.getElementById("bottomSuit");
  randomSuitBottom.innerHTML = suit[randSuit];

  if (suit[randSuit] === "♠" || suit[randSuit] === "♣") {
    randomSuitBottom.style.color = "black";
  } else {
    randomSuitBottom.style.color == "red";
  }
};
