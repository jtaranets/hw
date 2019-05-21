"use strict";

const url = "https://test-users-api.herokuapp.com/users/";
const form = document.querySelector(".main-form");
const allUsersBtn = document.querySelector(".getAllUsers");
const userByIdBtn = document.querySelector(".getUserById");
const addUserBtn = document.querySelector(".addUser");
const removeUserBtn = document.querySelector(".removeUser");
const getIdInput = document.querySelector(".getID-input");
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");
const removeIdInput = document.querySelector(".removeID-input");
const inputs = document.querySelectorAll(".input");
const arrInputs = Array.from(inputs);
const result = document.querySelector(".data");

console.log(arrInputs);

form.addEventListener("click", getAllUsers);
form.addEventListener("click", getUserById);
form.addEventListener("click", addUser);
form.addEventListener("click", removeUser);

function getAllUsers(event) {
  event.preventDefault();
  if (event.target === allUsersBtn) {
    result.textContent = "";
    const list = document.createElement("ul");
    list.classList.add("list");
    result.append(list);
    console.log("get all users");
    arrInputs.map(el => el.value = "");
    fetch(url)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("hey, there is an error");
      })
      .then(data => {
        let result = data.data.reduce(
          (acc, el) =>
            acc +
            `<li>ID: ${el.id} <br> Name: ${el.name} <br> Age: ${el.age}</li>`,
          ""
        );
        list.innerHTML = `<h2 class="list-title">All users:</h2>${result}`;
      })
      .catch(er => console.log(er));
  }

}

function getUserById(event) {
  event.preventDefault();
  if (event.target === userByIdBtn) {
    result.textContent = "";
    arrInputs.map(el => {
      if(el !== getIdInput){
        el.value = "";
      }
    });
    const id = getIdInput.value;
    fetch(url + id)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("hey, there is an error");
      })
      .then(data => {
        // console.log(data);
        result.textContent = `ID: ${data.data.id} \n Name: ${
          data.data.name
        }  Age: ${data.data.age}`;
      })
      .catch(er => console.log("Error:", er));
  }
}

function addUser(event) {
  event.preventDefault();
  if (event.target === addUserBtn) {
    result.textContent = "";
    arrInputs.map(el => {
      if(el !== nameInput && el !== ageInput){
        el.value = "";
      }
    });
    const name = nameInput.value;
    const age = ageInput.value;
    const addingUSer = {
      name,
      age
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(addingUSer),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        result.textContent = `ID: ${data.data._id} \n Name: ${
          data.data.name
        }  Age: ${data.data.age}`;
      });
  }
}

function removeUser(event) {
  event.preventDefault();
  if (event.target === removeUserBtn) {
    result.textContent = "";
    arrInputs.map(el => {
      if(el !== removeIdInput){
        el.value = "";
      }
    });
    const id = removeIdInput.value;
    fetch(url + id, {
      method: "DELETE"
    })
      .then(
        () =>
          (result.textContent = `Congratulations, user with ID ${id} is deleted`)
      )
      .catch(er => console.log(er));
  }
}
