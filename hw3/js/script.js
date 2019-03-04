"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login) {
  let validLogin;
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
}

const isLoginUnique = function(logins, login) {
  let uniqueLogin;
  if (logins.includes(login)) {
   return false;
  } else {
    return true;
  }
};

const addLogin = function(logins, login) {
  if (!isLoginValid(login)) {
    return alert("Ошибка! Логин должен быть от 4 до 16 символов");
  } else {
    const canProceed = true;
    if (!isLoginUnique(logins, login)) {
      return alert("Такой логин уже используется!");
    } else {
      logins.push(login);
      return alert("Логин успешно добавлен!");
    }
  }
  return logins;
};




addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "qwerty123");
addLogin(logins, "dfsdfdfkfsdhdfdfdjfhsdk");
addLogin(logins, "Julia");

console.log(logins);
