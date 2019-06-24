// import "./style.scss";

import View from './scripts/view.js';
import Model from './scripts/model.js';
import Controller from './scripts/controller.js';
import EventEmitter from './help/event-emitter.js';


const view = new View();
const model = new Model();

new Controller(view, model);

const inpval = view.getInputValue();
// console.log(inpval);
if(inpval){

    const data = model.linkPreview(inpval);
}




// form.addEventListener("input", linkAdder.funct.bind(linkAdder));

