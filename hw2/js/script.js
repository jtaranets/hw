"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Please enter a number");
  let userInputNumber = Number(userInput);
  if (userInput !== null && !Number.isNaN(userInputNumber)){
  numbers.push(userInputNumber);
  }
  if(Number.isNaN(userInputNumber)){
    const invalidInput = alert("Invalid input, please try again");
  };

} while (userInput !== null)
 
console.log(numbers);

let numbersLength = numbers.length;
console.log(numbersLength);
console.log(typeof(numbersLength));


for (let i = 0; i < numbersLength; i++){
  total += numbers[i];
}

console.log(total);

if (numbersLength > 0 ) {
  alert(`The total sum of entered numbers equals to ${total}`);
}
else{
  alert('See you next time');
}


