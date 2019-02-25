'use strict';

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const string = "May the force be with you";
let longestWord;

console.log(longestWord); // 'force'

const arr = string.split(" ");
console.log(arr);
console.log(arr.length);

const arrLength = [];

for (let i = 0, max = arr.length; i < max; i++) {
  arrLength.push(arr[i].length);
}
const lengthOfTheLongestWord = Math.max(...arrLength);
console.log(lengthOfTheLongestWord);
const indexOfTheLongestWord = arrLength.indexOf(lengthOfTheLongestWord);
console.log(indexOfTheLongestWord);
console.log(arr[indexOfTheLongestWord]);

// =====================================================


// *
//   ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
//   Создайте игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Эти значения необходимо
//   сохранить в переменные min и max. Учтите что массив произвольный,
//   но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y 
//   соотвественно самый маленький и самый большой элемент массива.
  
//   Но пользователь может ввести что угодно, необходимо проверить 
//   что было введено. Преобразовать input в числовой тип и проверить 
//   число ли это.
  
//     - Если не число - выводим alert с сообщением о том, что было 
//       введено не число.
//     - Если число - проверить содержит ли в себе массив numbers это число.
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

// const numbers = [12, 15, 25, 37, 41];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];

// const userInput = prompt(`Enter a number between ${min} and ${max}`);
// const numberOfUserInput = Number(userInput);
// if (Number.isNaN(numberOfUserInput)){
//   alert('You entered not a number');
// }
//  else if(numbers.includes(numberOfUserInput)){
//   alert('Congratulations, you guessed a number');
//  }
//  else if(!numbers.includes(numberOfUserInput)){
//    alert('Sorry, you didn\'t win');
//  }