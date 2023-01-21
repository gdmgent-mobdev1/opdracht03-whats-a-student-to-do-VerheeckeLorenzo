import Authenticator from "../Auth/Authenticator";
import ElementFactory from "../Components/ElementFactory";
import { Screen } from "./Screen";
import googleSvg from '../Assets/google.svg';
import facebookSvg from '../Assets/facebook.svg';
class LoginScreen extends Screen {
    constructor() {
        super({ name: 'LoginScreen', routerPath: '/', isAsync: false });
        this.loginScreen = ElementFactory.createContainer({ classNames: ["loginScreen"] });
    }
    render() {
        const title = ElementFactory.createTitle({ text: "Login", size: 1, classNames: ['login-title'] });
        const email = ElementFactory.createInput({ type: "email", id: "mail", name: "email" });
        const emailLabel = ElementFactory.createLabel({ htmlFor: "mail", text: "E-mail" });
        const emailInput = ElementFactory.createContainer({ children: [emailLabel, email], classNames: ['input-container'] });
        const password = ElementFactory.createInput({ type: "password", id: "password", name: "password" });
        const passwordLabel = ElementFactory.createLabel({ htmlFor: "password", text: "Password" });
        const passwordInput = ElementFactory.createContainer({ children: [passwordLabel, password], classNames: ['input-container'] });
        const loginButton = ElementFactory.createButton({ text: "Login", className: "login-button", onClick: () => { new Authenticator().login(); } });
        const googleIcon = ElementFactory.createImage({ url: googleSvg, alt: 'Google icon', classNames: ['login-icon'] });
        const buttonGoogle = ElementFactory.createButton({ children: [googleIcon, ElementFactory.createSpan({ text: "Login with Google" })], className: 'google-button', onClick: () => { new Authenticator().loginWithGoogle(); } });
        const facebookIcon = ElementFactory.createImage({ url: facebookSvg, alt: 'Facebook icon', classNames: ['login-icon'] });
        const buttonFacebook = ElementFactory.createButton({ children: [facebookIcon, ElementFactory.createSpan({ text: "Login with Facebook" })], className: 'facebook-button', onClick: () => { new Authenticator().loginWithFacebook(); } });
        const registerLink = ElementFactory.createLink({ classNames: ["onboarding__link"], text: "Don't have an account?", href: "./register" });
        const formValidator = ElementFactory.createFormValidation();
        const loginForm = ElementFactory.createForm({
            classNames: ['login__form'],
            children: [
                emailInput,
                passwordInput,
                loginButton,
            ],
        });
        this.loginScreen.append(title, formValidator, loginForm, buttonGoogle, buttonFacebook, registerLink);
        return this.loginScreen;
    }
}
export default LoginScreen;
