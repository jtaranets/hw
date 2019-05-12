
// ========================== 10 ===============

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const list = document.querySelector(".menu");
const items = document.querySelectorAll(".menu-link");
console.log(items);

list.addEventListener("click", fun);

function fun(event) {
  if (event.target.nodeName !== "A") {
    return;
  }
  event.preventDefault();
  items.forEach(function(el) {
    if (event.target === el) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
