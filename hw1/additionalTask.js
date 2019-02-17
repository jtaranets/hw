// Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом.

//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
//       "Ошибка ввода" и больше ничего не делает.
//     - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
//     - В случае верного ввода, последовательно проверить кол-во мест в группах,
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому,
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
"use strict";

let sharm = 15;
let hurgada = 25;
let taba = 6;
if (sharm > 0 || hurgada > 0 || taba || 0) {
  const placeQuantityRequest = prompt(
    "Please enter the quantity of places you want to book here"
  );
  let placeQuantityUser = Number(placeQuantityRequest);
  console.log(placeQuantityUser);

  let rightGroupForUser;
  let groupName;
  let groupIdentifier;

  if (placeQuantityRequest === null) {
    alert("Нам очень жаль, приходите еще!");
  } else if (Number.isInteger(placeQuantityUser) && placeQuantityUser > 0) {
    let confirmedAvailablePlaces;
    let groupName;
    if (
      placeQuantityUser <= sharm ||
      placeQuantityUser <= hurgada ||
      placeQuantityUser <= taba
    ) {
      confirmedAvailablePlaces = true;
    }
    if (confirmedAvailablePlaces) {
      if (placeQuantityUser <= sharm) {
        groupName = "Sharm";
        let confirmedAvailablePlacesSharm = confirm(
          "We have available places in " +
            groupName +
            " group, would you like to proceed?"
        );
        if (confirmedAvailablePlacesSharm) {
          alert(
            "Congratulations! You have booked " +
              placeQuantityUser +
              " places with us in a " +
              groupName +
              " group"
          );
          sharm = sharm - placeQuantityUser;
        } else if (placeQuantityUser <= hurgada) {
          groupName = "Hurgada";
          let confirmedAvailablePlacesHurgada = confirm(
            "We have available places in " +
              groupName +
              " group, would you like to proceed?"
          );
          if (confirmedAvailablePlacesHurgada) {
            alert(
              "Congratulations! You have booked " +
                placeQuantityUser +
                " places with us in a " +
                groupName +
                " group"
            );
            hurgada = hurgada - placeQuantityUser;
          } else if (placeQuantityUser <= taba) {
            groupName = "Taba";
            let confirmedAvailablePlacesTaba = confirm(
              "We have available places in " +
                groupName +
                " group, would you like to proceed?"
            );
            if (confirmedAvailablePlacesTaba) {
              alert(
                "Congratulations! You have booked " +
                  placeQuantityUser +
                  " places with us in a " +
                  groupName +
                  " group"
              );
              taba = taba - placeQuantityUser;
            }
          } else {
            alert("Нам очень жаль, приходите еще!");
          }
        }
      } else if (placeQuantityUser <= hurgada) {
        if (placeQuantityUser <= hurgada) {
          groupName = "Hurgada";
          let confirmedAvailablePlacesHurgada = confirm(
            "We have available places in " +
              groupName +
              " group, would you like to proceed?"
          );
          if (confirmedAvailablePlacesHurgada) {
            alert(
              "Congratulations! You have booked " +
                placeQuantityUser +
                " places with us in a " +
                groupName +
                " group"
            );
            hurgada = hurgada - placeQuantityUser;
          } else if (placeQuantityUser <= taba) {
            groupName = "Taba";
            let confirmedAvailablePlacesTaba = confirm(
              "We have available places in " +
                groupName +
                " group, would you like to proceed?"
            );
            if (confirmedAvailablePlacesTaba) {
              alert(
                "Congratulations! You have booked " +
                  placeQuantityUser +
                  " places with us in a " +
                  groupName +
                  " group"
              );
              taba = taba - placeQuantityUser;
            }
          } else {
            alert("Нам очень жаль, приходите еще!");
          }
        }
      } else if (placeQuantityUser <= taba) {
        groupName = "Taba";
        let confirmedAvailablePlacesTaba = confirm(
          "We have available places in " +
            groupName +
            " group, would you like to proceed?"
        );
        if (confirmedAvailablePlacesTaba) {
          alert(
            "Congratulations! You have booked " +
              placeQuantityUser +
              " places with us in a " +
              groupName +
              " group"
          );
          taba = taba - placeQuantityUser;
        }
      } else {
        alert("Нам очень жаль, приходите еще!");
      }
    } else {
      alert("Извините, столько мест нет ни в одной группе!");
    }
  } else {
    alert("Ошибка ввода");
  }
}


console.log(sharm);
console.log(hurgada);
console.log(taba);
