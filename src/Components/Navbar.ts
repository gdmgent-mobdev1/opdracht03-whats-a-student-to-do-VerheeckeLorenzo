import { Component } from "./Component";

export class Navbar extends Component{
    navbarElement: HTMLElement;
    constructor(){
        super();
        this.navbarElement = document.createElement("nav");
    }
    render(){
        this.navbarElement.innerHTML = `
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/dashboard">Home</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
        `;
        return this.navbarElement;
    }
}