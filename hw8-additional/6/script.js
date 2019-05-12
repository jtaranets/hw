
// =========================== 6 ========================

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
const list = document.querySelector('.list');
const items = Array.from(document.querySelectorAll('li'));
console.log(items);
list.addEventListener('click', deleteElem);

function deleteElem(event){
  console.log(event.target);
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}

