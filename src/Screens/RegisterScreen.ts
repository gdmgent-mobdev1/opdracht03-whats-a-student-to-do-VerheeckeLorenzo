import ElementFactory from "../Components/ElementFactory";
import { Screen } from "./Screen";

export default class RegisterScreen extends Screen{
    registerScreen: HTMLElement;
    constructor(){
        super({name: 'RegisterScreen',routerPath:'/register', isAsync: false})
        this.registerScreen = document.createElement("div");
    }

    render(): HTMLElement{
        const title = ElementFactory.createTitle({text: "Register", size:1});
        // const email = ElementFactory.createInput({type: "email", id: "mail", name: "email"});
        // const emailLabel = ElementFactory.createLabel({htmlFor: "mail", text: "E-mail"});
        // const password = ElementFactory.createInput({type: "password", id: "password", name: "password"});
        // const passwordLabel = ElementFactory.createLabel({htmlFor: "password", text: "Password"});
        // const registerButton = ElementFactory.createButton({text: "Login", onClick: () =>{ register()}})
        // const registerForm = ElementFactory.createForm({ children: [emailLabel, email, passwordLabel, password, registerButton]});
        // const buttonGoogle = ElementFactory.createButton({text: "Login with Google", onClick: () =>{ googleLogin()}})
        // const buttonFacebook = ElementFactory.createButton({text: "Login with Facebook", onClick: () =>{ facebookLogin()}})
        this.registerScreen.append(title!);
        return this.registerScreen;
    }
}
