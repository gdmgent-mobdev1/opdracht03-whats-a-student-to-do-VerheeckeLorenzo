import { Component } from "./Component";

export class Loader extends Component{
    loader: HTMLElement;
    constructor(){
        super();
        this.loader = document.createElement("div");
        this.classList?.push("loader");
    }

    render(){
        return this.loader;
    }
}