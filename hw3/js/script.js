"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

const isLoginUnique = function(logins, login) {
  return logins.includes(login);
};

const addLogin = function(logins, login) {
  if (!isLoginValid(login)) {
    return alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  if (isLoginUnique(logins, login)) {
    return alert("Такой логин уже используется!");
  }
  logins.push(login);
  return alert("Логин успешно добавлен!");
};

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "qwerty123");
addLogin(logins, "dfsdfdfkfsdhdfdfdjfhsdk");
addLogin(logins, "Julia");

console.log(logins);