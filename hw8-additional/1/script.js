// ================== 1 ========================

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const button = document.querySelector('.button');

let i = 0;
// button.onclick = function(){
//     i++
//     button.textContent = i;
// }

const counter = function(){
    i++;
    button.textContent = i;
}

button.addEventListener('click', counter)

