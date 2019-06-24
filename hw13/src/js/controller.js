export default class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.view.eventListeners();
        view.on('delete', this.deleteCard.bind(this))
        view.on('add', this.addCard.bind(this))
    };
    deleteCard(){
        const id = this.view.deleteCard(e);
        this.model.deleteCardFromArr(id);
    }
    addCard(input){
        console.log('input', input);
        this.model.addCardToArr(input).then(item => this.view.creatingCards(this.view.urlHolder, item, this.view.box));
    }
}