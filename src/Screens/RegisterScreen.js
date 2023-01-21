import Authenticator from "../Auth/Authenticator";
import ElementFactory from "../Components/ElementFactory";
import { Screen } from "./Screen";
export default class RegisterScreen extends Screen {
    constructor() {
        super({ name: 'RegisterScreen', routerPath: '/register', isAsync: false });
        this.registerScreen = ElementFactory.createContainer({ classNames: ["registerScreen"] });
    }
    render() {
        const title = ElementFactory.createTitle({ classNames: ["register-title"], text: "Register", size: 1 });
        const formValidator = ElementFactory.createFormValidation();
        const avatarField = ElementFactory.createImageUploader({ name: "avatar", id: "avatar", circle: true });
        const usernameField = ElementFactory.createContainer({ classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ htmlFor: "username", text: "Username" }),
                ElementFactory.createInput({ type: "text", id: "username", name: "username" }),
            ]
        });
        const emailField = ElementFactory.createContainer({ classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ htmlFor: "mail", text: "E-mail" }),
                ElementFactory.createInput({ type: "email", id: "email", name: "email" }),
            ]
        });
        const passwordField = ElementFactory.createContainer({ classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ htmlFor: "password", text: "Password" }),
                ElementFactory.createInput({ type: "password", id: "password", name: "password" }),
            ]
        });
        const confirmPasswordField = ElementFactory.createContainer({ classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ htmlFor: "confirmPassword", text: "Confirm Password" }),
                ElementFactory.createInput({ type: "password", id: "confirmPassword", name: "confirmPassword" }),
            ]
        });
        const registerButton = ElementFactory.createButton({ text: "Register", onClick: async () => { await new Authenticator().register(); } });
        const registerForm = ElementFactory.createForm({
            classNames: ["register__form"],
            children: [formValidator, avatarField, usernameField, emailField, passwordField, confirmPasswordField, registerButton]
        });
        const loginLink = ElementFactory.createLink({ classNames: ["onboarding__link"], text: "Already have an account? Login here", href: "/" });
        this.registerScreen.append(title, registerForm, loginLink);
        return this.registerScreen;
    }
}
