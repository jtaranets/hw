// import "./style.scss";

const form = document.querySelector(".main-form");
const input = form.querySelector("input");
const url =
  "http://api.linkpreview.net/?key=5d0a4f2789c534b287f908bc71183ecd837b69d417c1a&q=";
const box = document.querySelector(".url-list");

const linkAdder = {
  linkAlredyExists: false,
  linkURL: null,
  deleteBtn: null,
  resArr: [],
  resArrUnique: [],
  linkValidator: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  creatingCards: function(input, data, output) {
    const source = document.querySelector(input).innerHTML.trim();
    const template = Handlebars.compile(source);
    const res = template(data);
    output.insertAdjacentHTML("afterbegin", res);
  },
  deleteCard: function(id, array) {
    id.addEventListener("click", e => {
      const elTarget = e.target.parentNode;
      const deletedLink = e.target.previousElementSibling.href;
      console.log(deletedLink);
      console.log(e.target.previousElementSibling.href);
      // array = array.filter(el => el.url !== deletedLink);
      const indOfDelCard = array.forEach(el => {
        if (el.url === deletedLink) {
          array.splice(array.indexOf(el), 1);
        }
      });
      console.log("array", array);
      localStorage.setItem("wasOpened", JSON.stringify(array));
      console.log(elTarget);
      elTarget.remove();
    });
    form.reset();
  },
  linkPreview: function(e) {
    e.preventDefault();
    fetch(url + input.value)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("hey, there is an error");
      })
      .then(data => {
        if (this.linkAlredyExists) {
          alert("such link already exists");
          form.reset();
          return;
        }
        if (this.linkValidator.test(input.value)) {
          console.log(data);
          this.creatingCards("#url-holder", data, box);
          this.resArr.push(data);
          console.log(this.resArr);
        }
        this.deleteBtn = document.querySelector(".delete-btn");
        this.deleteCard(this.deleteBtn, this.resArr);
        localStorage.setItem("wasOpened", JSON.stringify(this.resArr));
      });
  },
  funct: function(e) {
    e.preventDefault();
    this.linkURL = Array.from(document.querySelectorAll(".url-link"));
    console.log(this.linkURL);
    console.log(e.target.value);
    this.linkURL.some(el => {
      if (el.href === e.target.value) {
        console.log("yep");
        this.linkAlredyExists = true;
      }
    });
    this.linkURL.every(el => {
      if (el.href !== e.target.value) {
        console.log("nope");
        this.linkAlredyExists = false;
      }
    });
    if (this.linkURL.length === 0) {
      console.log("here we go");
      this.linkAlredyExists = false;
    }
    console.log(this.linkAlredyExists);
  },
  reloading: function() {
    const check = localStorage.getItem("wasOpened");
    const checkToObj = JSON.parse(check);
    console.log(check);
    console.log(checkToObj);
    if (check) {
      if (checkToObj.length > 0) {
        checkToObj.forEach(el => this.resArr.push(el));
        console.log("resArr", this.resArr);
        this.creatingCards("#url-holder-saved-cards", checkToObj, box);
        const deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach(el => this.deleteCard(el, this.resArr));
        // this.deleteCard(deleteBtn, this.resArr);
      }
    } else {
      return;
    }
  }
};

window.onload = linkAdder.reloading();
form.addEventListener("submit", linkAdder.linkPreview.bind(linkAdder));
form.addEventListener("input", linkAdder.funct.bind(linkAdder));

