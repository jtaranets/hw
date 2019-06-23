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
  filteredArr: null,
  linkValidator: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  creatingCards: function(input, data, output) {
    const source = document.querySelector(input).innerHTML.trim();
    const template = Handlebars.compile(source);
    const res = template(data);
    output.insertAdjacentHTML("afterbegin", res);
  },
  deleteCard: function(id, array, filter){
    id.addEventListener("click", e => {
      const elTarget = e.target.parentNode;
      console.log(e.target.previousElementSibling.href);
      filter = array.filter(
        el => el.url !== e.target.previousElementSibling.href
      );
      console.log("Array filt", filter);
      console.log(elTarget);
      elTarget.remove();
      localStorage.setItem("wasOpened", JSON.stringify(filter));
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
          // this.resArr.forEach(el => {
          //   if(el !== data){
          //     this.resArr.push(data)
          //   }
          //   return
          // })
          if (this.resArr.includes(data)) {
            console.log("catattaj");
          } else {
            this.resArr.push(data);
          }
          console.log(this.resArr);
          localStorage.setItem("wasOpened", JSON.stringify(this.resArr));
        }
        this.deleteBtn = document.querySelector(".delete-btn");
        this.deleteCard(this.deleteBtn, this.resArr, this.filteredArr);
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
  const check = localStorage.getItem("wasOpened");
  if (check) {
    const checkToObg = JSON.parse(check);    linkAdder.creatingCards("#url-holder-saved-cards", checkToObg, box);
    const deleteBtn = document.querySelector(".delete-btn");
    if(checkToObg.length > 0){
      linkAdder.deleteCard(deleteBtn, linkAdder.resArr, linkAdder.filteredArr);
    }
  } else {
    return;
  }
};
form.addEventListener("submit", linkAdder.linkPreview.bind(linkAdder));
form.addEventListener("input", linkAdder.funct.bind(linkAdder));
