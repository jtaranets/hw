
// =============== 7 ===================

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const list = document.querySelector(".input-list");
list.addEventListener("blur", checker, true);

function checker(event) {
  if (event.target.nodeName === "INPUT") {
    if (event.target.value.length === Number(event.target.dataset.length)) {
      event.target.classList.toggle('invalid', false);
      event.target.classList.toggle('valid', true);
    } else {
      event.target.classList.toggle('valid', false);
      event.target.classList.toggle('invalid', true);
    }
  }
  return;
}

