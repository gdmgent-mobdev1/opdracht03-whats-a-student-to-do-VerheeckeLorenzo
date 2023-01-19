import ElementFactory from "./ElementFactory";

export default class Notification{
    container : HTMLElement;
    constructor(){
        this.container = ElementFactory.createContainer({
            classNames: ['notification']
        })
    }

    static show(){
        

    }
}