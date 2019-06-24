export default class View{
    constructor(){
        this.form = document.querySelector(".main-form");
        this.input = form.querySelector("input");
        this.box = document.querySelector(".url-list");
    }
    creatingCards(input, data, output){
        const source = document.querySelector(input).innerHTML.trim();
        const template = Handlebars.compile(source);
        const res = template(data);
        output.insertAdjacentHTML("afterbegin", res); 
    };
    deleteCard(id){
        id.addEventListener("click", this.removeCard.bind(this))
    };
    removeCard(){
        const elTarget = e.target.parentNode;
        elTarget.remove();
        this.form.reset();
    };
    linkPreview(link){
        this.creatingCards("#url-holder", data, box);
    }
    reloading(){
    const check = localStorage.getItem("wasOpened");
    const checkToObj = JSON.parse(check);
    if (checkToObj.length > 0){
        this.creatingCards("#url-holder-saved-cards", checkToObj, box);
    }
    };
    onload(){
        window.onload = linkAdder.reloading();
    };
    submitUrl(){
        form.addEventListener("submit", this.linkPreview.bind(this));
    }
    
    }