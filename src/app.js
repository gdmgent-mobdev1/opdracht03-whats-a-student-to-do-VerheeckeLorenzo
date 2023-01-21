import { Loader } from './Components/Loader';
import { initFirebase } from './Lib/firebase';
import Router from './lib/router';
import { Screen } from './Screens/Screen';
export default class App {
    constructor({ parent, feedbackContainer }) {
        this.parent = parent;
        this.feedbackContainer = feedbackContainer;
        this.components = [];
        initFirebase();
    }
    clearParent() {
        while (this.parent?.firstChild) {
            this.parent.removeChild(this.parent.lastChild);
        }
    }
    clearFeedback() {
        while (this.feedbackContainer.firstChild) {
            this.feedbackContainer.removeChild(this.feedbackContainer.lastChild);
        }
    }
    // adds the component to the array and to the router
    addComponent(component) {
        if (!(component instanceof Screen))
            return;
        component.reRender = () => { this.showComponent({ name: component.name, props: component.props }); };
        const { name, routerPath } = component;
        this.components.push(component);
        Router.getRouter().on(routerPath, ({ data }) => {
            this.showComponent({
                name,
                props: data,
            });
        }).resolve();
    }
    // renders the component if the component exists
    showComponent({ name, props }) {
        const foundComponent = this.components.find((component) => component.name === name);
        if (!foundComponent)
            return;
        if (props)
            foundComponent.props = props;
        this.clearParent();
        if (foundComponent.isAsync) {
            this.feedbackContainer.append(new Loader().render());
            foundComponent
                .render()
                // @ts-ignore
                .then((renderedComponent) => {
                this.clearFeedback();
                this.parent.appendChild(renderedComponent);
            })
                .catch((e) => {
                console.error(e.message);
            });
        }
        else {
            // @ts-ignore
            this.parent.appendChild(foundComponent.render());
        }
    }
}
