"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let max = passwords.length;
let userInput;

for (let i = 0; i < max; i += i) {
  do {
    const userInput = prompt("Please enter your password");
    if (userInput !== passwords[i]) {
      attempts = attempts - 1;
      alert(`You have ${attempts} attempts left`);
    } else if (userInput === passwords[i]) {
      alert("Congratulations!");
    } else if (attempts === 0) {
      alert("You have no more attempts left, your account is blocked");
    }
  } while (userInput !== null && attempts >= 0);
}
