

// ========================  4  =====================
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const options = document.querySelectorAll('input[type="radio"]');
console.log(options);
const form = document.querySelector('.question-form');
const labels = document.querySelectorAll('label');
console.log(labels);
console.log(labels[0].firstElementChild);

form.addEventListener('submit', handler);
form.addEventListener('submit', checker);

function handler(event){
  event.preventDefault();
  console.log('handler');
}

function checker(){
  labels.forEach(function(el){
    if(el.firstElementChild.checked){
      console.log(el.innerText);
      result.textContent = el.innerText;
    }
  })
}

