'use strict';

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

const account = new Account('Mangozedog', 'mango@dog.woof');
function Account(login, email){
    this.login = login;
    this.email = email;
}


Account.prototype.getInfo = function(){
    return `Login: ${this.login} Email: ${this.email}`; 
} 

const julia = new Account('Julia', 'jtarenets@gmil.com')

console.log(Account.prototype.getInfo); // function
console.log(account.getInfo());  // Login: Mangozedog, Email: mango@dog.woof
console.log(julia.getInfo());

// ====================================================================================

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

class StringBuilder{
    constructor(string){
        this._string = string;
    }
    get value(){
        return this._string;
    }
    append(str){
        return this._string = this._string + str;
    }
    prepend(str){
        return this._string = str + this._string;
    }
    pad(str){
        return this._string = str + this._string + str;
    }
}

const builder = new StringBuilder('.');

console.log(builder.value); 

builder.append('^');  
console.log(builder.value); // '.^'

builder.prepend('^'); 
// console.log(builder.prepend('^'));
console.log(builder.value); // '^.^'

builder.pad('='); 
// console.log(builder.pad('='));
console.log(builder.value); // '=^.^='

// =================================================================\


class Car {
        constructor({ maxSpeed = 0, price}) {
          this.maxSpeed = maxSpeed;
          this.speed = 0;
          this.running = false;
          this.distance = 0;
          this._price = price;
          /*
//           Добавь свойства:
//             - speed - для отслеживания текущей скорости, изначально 0.
//             - maxSpeed - для хранения максимальной скорости 
//             - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//             - distance - содержит общий киллометраж, изначально с 0
//         */

        }
      
        turnOn() {
          this.running = true;
          // Добавь код для того чтобы завести автомобиль
//         // Просто записывает в свойство running значание true
        }
      
        turnOff() {
          this.running = false;
          // Добавь код для того чтобы заглушить автомобиль
//         // Просто записывает в свойство running значание false
        }
      
        accelerate(spd) {
          if(spd <= this.maxSpeed){
            this.speed = spd;
            // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed
          }
        }
      
        decelerate(spd) {
          if(spd <= this.maxSpeed && spd > 0){
            this.speed = spd;
            // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed и не меньше нуля
          }
        }
      
        drive(hours) {
          if(this.running){
            this.distance = hours * this.speed;
            // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//         // но только в том случае если машина заведена!
          }
        }
        static getSpecs({...object}){
          console.log({...object});
          return console.log(`Max Speed: ${object.maxSpeed}, Speed: ${object.speed}, Running: ${object.running}, Distance: ${object.distance}`);
        }

        get carPrice(){
          return this._price;
        }

        set carPrice(value){
          this._price = value;
        }
      }


  const car = new Car({ maxSpeed: 100 });
  car.accelerate(45);
  car.decelerate(23);
  car.turnOn();
  car.drive(12);
  console.log(car.speed);
  console.log(car.running);
  console.log(car.distance);

  //  ==========================================
/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

const car2 = new Car({ maxSpeed: 100 });
car2.turnOn();
car2.accelerate(50);
car2.drive(2);
Car.getSpecs(car2); // maxSpeed: 100, speed: 50, running: true, distance: 100


// ============================================
/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/


const car3 = new Car({ maxSpeed: 50, price: 2000 });
console.log(car3.carPrice); // 2000

car3.carPrice = 4000;
console.log(car3.carPrice); // 4000


  