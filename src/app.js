/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "j"];
  const suit = ["♦", "♥", "♠", "♣"];
  let randNumber = Math.floor(Math.random() * 12);
  let randSuit = Math.floor(Math.random() * 4);
  let numbs = document.getElementById("numb");
  numbs.innerHTML = number[randNumber];
  let newSuit = document.getElementById("topSuit");
  newSuit.innerHTML = suit[randSuit];
  if (suit[randSuit] === "♠" || suit[randSuit] == "♣") {
    newSuit.style.color = "black";
  } else {
    newSuit.style.color == "red";
  }
  let newSuit2 = document.getElementById("bottomSuit");
  newSuit2.innerHTML = suit[randSuit];

  if (suit[randSuit] === "♠" || suit[randSuit] === "♣") {
    newSuit2.style.color = "black";
  } else {
    newSuit2.style.color == "red";
    newSuit2.style.transform = "rotate(180deg)";
  }
};
