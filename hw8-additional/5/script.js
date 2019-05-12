

// =============  5 ====================

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const list = document.querySelector('.images');
list.addEventListener('click', listener);

function listener(event){
  if(event.target.nodeName === 'IMG'){
    alert(event.target.src);
  }
  return;
}

