
// =================== 9 ====================

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const openBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', open);

function open(){
  modal.classList.toggle('modal-hidden');
}

closeBtn.addEventListener('click', close);
modal.addEventListener('click', closeModal);

function close(){
  modal.classList.toggle('modal-hidden');
}

function closeModal(event){
  if (event.target === modal){
    close();
  }
}

