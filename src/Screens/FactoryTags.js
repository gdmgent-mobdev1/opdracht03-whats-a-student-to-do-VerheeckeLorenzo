import ElementFactory from "../Components/ElementFactory";
import { Tag } from "../Models/Tag";
import { Screen } from "./Screen";
// This factory class (api url) has a purpose to create some basic tags in the fb db
export default class FactoryTags extends Screen {
    constructor() {
        super({ name: 'FactoryTags', routerPath: '/factoryTags', isAsync: true });
        this.isAsync = true;
        this.factoryScreen = ElementFactory.createContainer({ classNames: ["factoryScreen"] });
    }
    async render() {
        await Tag.factory();
        const title = ElementFactory.createTitle({ text: 'Tags created successfully', size: 1 });
        this.factoryScreen.appendChild(title);
        return this.factoryScreen;
    }
}
