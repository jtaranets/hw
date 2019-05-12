

// ====================== 8 =======================

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const message = document.querySelector('.message');
const input = document.querySelector('.input');
const inputValue = document.querySelector('.input-value');

input.addEventListener('focus', fun);
input.addEventListener('blur', clear);
input.addEventListener('input', change);

function fun(){
  message.textContent = "Input is in focus!";
}

function clear(){
  message.textContent = "";
}

function change(event){
  inputValue.textContent = 'Current input value: ' + event.target.value;
}

