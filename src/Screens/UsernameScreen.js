import ElementFactory from "../Components/ElementFactory";
import { Screen } from "./Screen";
export default class UsernameScreen extends Screen {
    constructor() {
        super({ name: 'UsernameScreen', routerPath: '/username', isAsync: false });
        this.usernameScreen = ElementFactory.createContainer({ classNames: ["usernameScreen"] });
    }
    render() {
        return this.usernameScreen;
    }
}
