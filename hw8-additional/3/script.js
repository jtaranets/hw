
// ====================== 3 ===================

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

let btn = document.querySelectorAll('.btn');
console.log(btn);
let result = document.querySelector('.value');
console.log(result);

class Counter {
  constructor(value) {
    this.value = value;
  }
  onChange(){
    result.textContent = this.value;
  }
  increment() {
    this.value += 1;
  }
  decrement(){
    this.value -=1;
  }
}

let newCounter = new Counter(5);
newCounter.onChange();
console.log(newCounter);

const sub = function(){
  newCounter.decrement();
  newCounter.onChange();
}

const add = function(){
  newCounter.increment();
  newCounter.onChange();
}

const listeners = function(btn){
  btn.forEach(function(el){
    const choice = function(){
      if(el.dataset.action === 'sub'){
        sub();
      }
      else if(el.dataset.action === 'add'){
        add();
      }
    }
    el.addEventListener('click', choice);
  })
}

listeners(btn);

