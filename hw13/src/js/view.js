import EventEmitter from "../helper/eventEmitter.js";

export default class View extends EventEmitter {
  constructor() {
    super();
    this.form = document.querySelector(".main-form");
    this.input = this.form.querySelector("input");
    this.box = document.querySelector(".url-list");
    this.urlHolder = document.querySelector('#url-holder');
    this.urlHolderderForLists = document.querySelector('#url-holder-saved-cards');
  }
  creatingCards(input, data, output) {
    const source = input.innerHTML.trim();
    console.log(source);
    const template = Handlebars.compile(source);
    const res = template(data);
    output.insertAdjacentHTML("afterbegin", res);
  }
  deleteCard(e) {
    const elTarget = e.target.parentNode;
    elTarget.remove();
    form.reset();
    return e.target;
  }
  addCard(e){
      e.preventDefault();
      const inputValue = this.input.value;
      this.emit('add', inputValue)
      this.form.reset();
  }
  linkExists(){
    alert("such link already exists");
    form.reset();
  }

  eventListeners() {
    const deleteBtn = document.querySelector(".delete-btn");
    // deleteBtn.addEventListener("click", this.deleteCard.bind(this));
    this.form.addEventListener('submit', this.addCard.bind(this));
  }
}
