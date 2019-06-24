export default class Model {
  constructor() {
    this.linkAlredyExists = false;
    this.linkURL = null;
    this.resArr = [];
    this.linkValidator = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  }

  deleteCard(id, array) {
    const deletedLink = e.target.previousElementSibling.href;
    const indOfDelCard = array.forEach(el => {
      if (el.url === deletedLink) {
        array.splice(array.indexOf(el), 1);
      }
    });
    console.log("array", array);
    localStorage.setItem("wasOpened", JSON.stringify(array));
  }
  linkPreview(e) {
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
          this.resArr.push(data);
          console.log(this.resArr);
          return data;
        }
        deleteBtn = document.querySelector(".delete-btn");
        this.deleteCard(deleteBtn, this.resArr);
        localStorage.setItem("wasOpened", JSON.stringify(this.resArr));
      });
  }
  funct(e) {
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
  reloading() {
    const check = localStorage.getItem("wasOpened");
    const checkToObj = JSON.parse(check);
    console.log(check);
    console.log(checkToObj);
    if (check) {
      if (checkToObj.length > 0) {
        checkToObj.forEach(el => this.resArr.push(el));
        console.log("resArr", this.resArr);
        const deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach(el => this.deleteCard(el, this.resArr));
      }
    } else {
      return;
    }
  }
}
