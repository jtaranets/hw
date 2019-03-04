"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let max = passwords.length;
let userInput;
let hasPassword = false;

  do {
    attempts = attempts - 1;
    const userInput = prompt("Please enter your password");
    if (!passwords.includes(userInput)) {
      alert(`You have ${attempts} attempts left`);
    } else {
      alert("Congratulations!");
      break;
    } 
    if (attempts === 0) {
      alert("You have no more attempts left, your account is blocked");
      break;
    }
    console.log(userInput);
  } while (userInput !== null);
