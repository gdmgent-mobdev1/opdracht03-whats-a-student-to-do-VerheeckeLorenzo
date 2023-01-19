import Authenticator from "../Auth/Authenticator";
import ElementFactory from "../Components/ElementFactory";
import Router from "../lib/router";
import { Screen } from "./Screen";

class LoginScreen extends Screen{
    loginScreen: HTMLElement;
    constructor(){
        super({name: 'LoginScreen',routerPath:'/', isAsync: false});
        this.loginScreen = document.createElement("div");
    }
    render(): HTMLElement{
        const title = ElementFactory.createTitle({text: "Login", size:1})
        const email = ElementFactory.createInput({type: "email", id: "mail", name: "email"});
        const emailLabel = ElementFactory.createLabel({htmlFor: "mail", text: "E-mail"});
        const emailInput = ElementFactory.createContainer({children:[emailLabel, email], classNames: ['input-container']})
        const password = ElementFactory.createInput({type: "password", id: "password", name: "password"});
        const passwordLabel = ElementFactory.createLabel({htmlFor: "password", text: "Password"});
        const passwordInput = ElementFactory.createContainer({children:[passwordLabel, password], classNames: ['input-container']})
        const loginButton = ElementFactory.createButton({text: "Login", onClick: () =>{ new Authenticator().login()}})
        const buttonGoogle = ElementFactory.createButton({text: "Login with Google", onClick: () =>{ new Authenticator().loginWithGoogle()}})
        const buttonFacebook = ElementFactory.createButton({text: "Login with Facebook", onClick: () =>{ new Authenticator().loginWithFacebook()}})
        const buttonRegister = ElementFactory.createButton({text: "Register", onClick: () =>{ window.location.replace('/register');}});
        const formValidator = ElementFactory.createFormValidation();

        const loginForm = ElementFactory.createForm({
            classNames: ['login__form'],
            children: [
              emailInput,
              passwordInput,
              loginButton,
            ],
          });

        const loginContainer = ElementFactory.createContainer({
            classNames: ['login'],
            children: [
                title,
                formValidator,
                loginForm,
                buttonGoogle,
                buttonFacebook,
                buttonRegister
            ]
        })


        this.loginScreen.append(loginContainer);
        return this.loginScreen;
    }
}

export default LoginScreen;