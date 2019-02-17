"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const loginOrPasswordIsNotEntered = "Отменено пользователем!";
const loginIsNotCorrect = "Доступ запрещен, неверный логин!";
const passwordIsNotCorrect = "Доступ запрещен, неверный пароль!";
const passwordIsCorrect = "Добро пожаловать!";
let userLogin = prompt("Enter your login");
let userPassword;
if (userLogin === null) {
  alert (loginOrPasswordIsNotEntered);
} else if  (userLogin !== adminLogin) {
  alert(loginIsNotCorrect);
} else if(userLogin === adminLogin) {
  userPassword = prompt("Enter your password");
  if (userPassword === null) {
    alert (loginOrPasswordIsNotEntered);
  } else if (userPassword !== adminPassword) {
    alert (passwordIsNotCorrect);
  } else if (userPassword === adminPassword) {
    alert(passwordIsCorrect);
  }
}
