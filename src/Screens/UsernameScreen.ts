import ElementFactory from "../Components/ElementFactory";
import { Screen } from "./Screen";

export default class UsernameScreen extends Screen {
    usernameScreen : HTMLElement;
    constructor(){
        super({name: 'UsernameScreen',routerPath:'/username', isAsync: false});
        this.usernameScreen = ElementFactory.createContainer({classNames: ["usernameScreen"]});
    }

    render(): HTMLElement | Promise<HTMLElement> {
        
        
        return this.usernameScreen       
    }
}