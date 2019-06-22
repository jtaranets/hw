const form = document.querySelector(".main-form");
const input = form.querySelector("input");
const url =
  "http://api.linkpreview.net/?key=5d0a4f2789c534b287f908bc71183ecd837b69d417c1a&q=";
const box = document.querySelector(".url-list");

const source = document.querySelector("#url-holder").innerHTML.trim();
const template = Handlebars.compile(source);

const linkAdder = {
  linkAlredyExists: false,
  linkURL: null,
  deleteBtn: null,
  linkValidator: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  linkPreview: function(e) {
    e.preventDefault();
    fetch(url + input.value)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("hey, there is an error");
      })
      .then(data => {
        console.log(data);
        const res = template(data);
        console.log(res);
        if (this.linkAlredyExists) {
          alert("such link already exists");
          form.reset();
          return;
        }
        if (this.linkValidator.test(input.value)) {
          box.insertAdjacentHTML("afterbegin", res);
        }
        this.deleteBtn = document.querySelector(".delete-btn");
        this.deleteBtn.addEventListener("click", e => {
          const elTarget = e.target.parentNode;
          elTarget.remove();
        });
        form.reset();
        console.log("loc stor");
        const wasOpened = document.querySelector(".url-list").innerHTML;
        localStorage.setItem("wasOpened", wasOpened);
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
  }
};

window.onload = function() {
  console.log(document.querySelector(".url-list"));
  document.querySelector(".url-list").innerHTML = localStorage.getItem(
    "wasOpened"
  );
};
form.addEventListener("submit", linkAdder.linkPreview.bind(linkAdder));
form.addEventListener("input", linkAdder.funct.bind(linkAdder));

