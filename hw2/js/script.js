"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Please enter a number");
  let userInputNumber = Number(userInput);
  if (!Number.isNaN(userInputNumber)){
  numbers.push(userInputNumber);
  }
  else {
    const invalidInput = alert("Invalid input, please try again");
  };

} while (userInput !== null)
 
console.log(numbers);

const numbersLength = numbers.length;
console.log(numbersLength);
console.log(typeof(numbersLength));


for (let i = 0; i < numbersLength; i++){
  total += numbers[i];
}

console.log(total);

if (numbersLength > 0){
  alert(`The total sum of entered numbers equals to ${total}`);
}


