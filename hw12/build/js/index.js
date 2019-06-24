"use strict";

// import "./style.scss";
var form = document.querySelector(".main-form");
var input = form.querySelector("input");
var url = "http://api.linkpreview.net/?key=5d0a4f2789c534b287f908bc71183ecd837b69d417c1a&q=";
var box = document.querySelector(".url-list");
var linkAdder = {
  linkAlredyExists: false,
  linkURL: null,
  deleteBtn: null,
  resArr: [],
  resArrUnique: [],
  linkValidator: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  creatingCards: function creatingCards(input, data, output) {
    var source = document.querySelector(input).innerHTML.trim();
    var template = Handlebars.compile(source);
    var res = template(data);
    output.insertAdjacentHTML("afterbegin", res);
  },
  deleteCard: function deleteCard(id, array) {
    id.addEventListener("click", function (e) {
      var elTarget = e.target.parentNode;
      var deletedLink = e.target.previousElementSibling.href;
      console.log(deletedLink);
      console.log(e.target.previousElementSibling.href); // array = array.filter(el => el.url !== deletedLink);

      var indOfDelCard = array.forEach(function (el) {
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
  linkPreview: function linkPreview(e) {
    var _this = this;

    e.preventDefault();
    fetch(url + input.value).then(function (res) {
      if (res.ok) return res.json();
      throw new Error("hey, there is an error");
    }).then(function (data) {
      if (_this.linkAlredyExists) {
        alert("such link already exists");
        form.reset();
        return;
      }

      if (_this.linkValidator.test(input.value)) {
        console.log(data);

        _this.creatingCards("#url-holder", data, box);

        _this.resArr.push(data);

        console.log(_this.resArr);
      }

      _this.deleteBtn = document.querySelector(".delete-btn");

      _this.deleteCard(_this.deleteBtn, _this.resArr);

      localStorage.setItem("wasOpened", JSON.stringify(_this.resArr));
    });
  },
  funct: function funct(e) {
    var _this2 = this;

    e.preventDefault();
    this.linkURL = Array.from(document.querySelectorAll(".url-link"));
    console.log(this.linkURL);
    console.log(e.target.value);
    this.linkURL.some(function (el) {
      if (el.href === e.target.value) {
        console.log("yep");
        _this2.linkAlredyExists = true;
      }
    });
    this.linkURL.every(function (el) {
      if (el.href !== e.target.value) {
        console.log("nope");
        _this2.linkAlredyExists = false;
      }
    });

    if (this.linkURL.length === 0) {
      console.log("here we go");
      this.linkAlredyExists = false;
    }

    console.log(this.linkAlredyExists);
  },
  reloading: function reloading() {
    var _this3 = this;

    var check = localStorage.getItem("wasOpened");
    var checkToObj = JSON.parse(check);
    console.log(check);
    console.log(checkToObj);

    if (check) {
      if (checkToObj.length > 0) {
        checkToObj.forEach(function (el) {
          return _this3.resArr.push(el);
        });
        console.log("resArr", this.resArr);
        this.creatingCards("#url-holder-saved-cards", checkToObj, box);
        var deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach(function (el) {
          return _this3.deleteCard(el, _this3.resArr);
        }); // this.deleteCard(deleteBtn, this.resArr);
      }
    } else {
      return;
    }
  }
};
window.onload = linkAdder.reloading();
form.addEventListener("submit", linkAdder.linkPreview.bind(linkAdder));
form.addEventListener("input", linkAdder.funct.bind(linkAdder));