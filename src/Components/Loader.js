import ElementFactory from "./ElementFactory";
export class Loader {
    constructor() {
        this.loader = ElementFactory.createContainer({ classNames: ["loader"], children: [ElementFactory.createContainer({ classNames: ["spinner"] })] });
        // (this.loader.classList as any).push("loader");
    }
    render() {
        return this.loader;
    }
}
