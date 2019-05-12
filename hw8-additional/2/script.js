
// =========================== 2 ===========================

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const expression = document.querySelector('.expression');

const firstInput = expression.firstElementChild;
console.log(firstInput);
const secondInput = expression.children[2];
console.log(secondInput);
const result = document.querySelector('.result');

const btn = document.querySelector('button');

const add = function(){
  result.textContent = Number(firstInput.value) + Number(secondInput.value)
}

btn.addEventListener('click', add)

