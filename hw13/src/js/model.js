export default class Model {
  constructor() {
    this.url =
      "http://api.linkpreview.net/?key=5d0a4f2789c534b287f908bc71183ecd837b69d417c1a&q=";
    this.linkAlredyExists = false;
    this.linkURL = null;
    this.resArr = [];
    this.linkValidator = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  }
  deleteCardFromArr(id) {
    const deletedLink = id.previousElementSibling.href;
    this.resArr = this.resArr.filter(el => el.url !== deletedLink);
    // const indOfDelCard = array.forEach(el => {
    //   if (el.url === deletedLink) {
    //     array.splice(array.indexOf(el), 1);
    //   }
    // });
    localStorage.setItem("wasOpened", JSON.stringify(array));
  }
  addCardToArr(value) {
    return fetch(this.url + value)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("here is an error", error);
      })
      .then(data => {
        // if (this.linkAlredyExists) {
        //   return;
        // }
        if (this.linkValidator.test(value)) {
          // this.creatingCards("#url-holder", data, box);
          console.log(data);
          this.resArr.push(data);
          console.log(this.resArr);
          localStorage.setItem("wasOpened", JSON.stringify(this.resArr));
          return data;
          // console.log(this.resArr);
        }
      });
  }
}
